"""Where each word falls inside a recording whose words are already known.

This is forced alignment, and it is a smaller job than transcribing.  A
transcriber has to decide which word it heard, and decides wrongly exactly where
a text is hardest - a genealogy is every unfamiliar name and no common short
words to fall back on.  Here the words are handed in, so nothing is decided about
which word it is; the model only says how likely each letter is at each moment,
and the known letters are laid onto those moments by the one path through them
that keeps them in order.  A name the model has never seen is then no harder than
"the".

The model is the wav2vec2 base reading trained on nine hundred and sixty hours of
read English, published under the MIT licence.  The multilingual alignment model
that torchaudio offers beside it is better at unfamiliar names and is published
non-commercially, which makes it the wrong tool for a repository whose work is
meant to be able to pay for people.  What is lost by choosing the permissive one
is spelling rather than placing: it writes MELT where the text says Melchi, and
puts it on Melchi's sound all the same.

The sound is decoded by ffmpeg rather than by the audio library, because the
library now hands decoding to a package that need not be installed, while ffmpeg
is already required by everything else here that touches sound.

Takes the path of a JSON file holding {"pieces": [{"audio": <path>, "text":
<the words spoken in it>}, ...]} and prints one JSON line holding, for each piece
in the order given, every word with the second it begins and the second it ends,
counted from the start of that piece's own file.  Several pieces are taken in one
call because loading the model costs about three seconds and aligning a piece
costs about half a second per second of sound, so a caller with a chapter's worth
of pieces should pay the loading once.

A word made of no letters the model knows - a number, or a mark on its own -
cannot be placed and is reported under "dropped" rather than quietly given the
time of its neighbour.

An aligner is never given the chance to say no, and that is the danger in it.
Handed the words of a different recording it does not object: it lays them onto
the sound by the best path it can find and reports times that look exactly like
right ones.  So each piece also carries a "confidence", the mean of how well each
word's own letters matched the sound under it, and a caller that means to trust
these times must read it.  The one case the model does refuse outright is a text
too long for its recording to hold - there are not enough moments to spell it -
and that comes back as no words and a "refused" line rather than as a throw, so
that one impossible piece cannot cost a caller the whole chapter.
"""

import json
import re
import subprocess
import sys

import numpy
import torch
import torchaudio
import torchaudio.functional as F

BUNDLE = torchaudio.pipelines.WAV2VEC2_ASR_BASE_960H


def sound_read(path, rate):
    """The recording as one channel of numbers at the rate the model listens at."""
    raw = subprocess.run(
        [
            "ffmpeg", "-v", "error", "-i", path,
            "-f", "s16le", "-ac", "1", "-ar", str(rate), "-",
        ],
        capture_output=True,
        check=True,
    ).stdout
    samples = numpy.frombuffer(raw, dtype=numpy.int16).astype(numpy.float32) / 32768.0
    return torch.from_numpy(samples).unsqueeze(0)


def words_spelled(text, index_of):
    """Each word of the text beside the letters the model can be asked about."""
    spelled = []
    dropped = []
    for word in text.split():
        plain = re.sub(r"[^A-Z']", "", word.upper())
        plain = "".join(c for c in plain if c in index_of)
        if plain:
            spelled.append((word, plain))
        else:
            dropped.append(word)
    return spelled, dropped


def piece_timed(model, index_of, separator, rate, piece):
    """Every word of one piece with the second it begins and the second it ends."""
    spelled, dropped = words_spelled(piece["text"], index_of)
    if not spelled:
        return {"words": [], "dropped": dropped, "seconds": 0.0, "confidence": 0.0}

    targets = []
    word_of_token = []
    for order, (_, plain) in enumerate(spelled):
        if targets:
            targets.append(separator)
            word_of_token.append(None)
        for letter in plain:
            targets.append(index_of[letter])
            word_of_token.append(order)

    waveform = sound_read(piece["audio"], rate)
    with torch.inference_mode():
        emissions, _ = model(waveform)
        emissions = torch.log_softmax(emissions, dim=-1)

    seconds = round(waveform.size(1) / rate, 3)

    try:
        aligned, scores = F.forced_align(
            emissions, torch.tensor([targets], dtype=torch.int32), blank=0
        )
    except RuntimeError as refusal:
        return {
            "words": [],
            "dropped": dropped,
            "seconds": seconds,
            "confidence": 0.0,
            "refused": str(refusal),
        }

    spans = F.merge_tokens(aligned[0], scores[0].exp())
    ratio = waveform.size(1) / emissions.size(1) / rate

    words = []
    for order, (word, _) in enumerate(spelled):
        own = [span for span, which in zip(spans, word_of_token) if which == order]
        frames = sum(s.end - s.start for s in own)
        words.append(
            {
                "word": word,
                "start": round(own[0].start * ratio, 3),
                "end": round(own[-1].end * ratio, 3),
                "score": round(sum(s.score * (s.end - s.start) for s in own) / frames, 3),
            }
        )

    return {
        "words": words,
        "dropped": dropped,
        "seconds": seconds,
        "confidence": round(sum(w["score"] for w in words) / len(words), 3),
    }


def main(args_path):
    with open(args_path) as handle:
        args = json.load(handle)

    model = BUNDLE.get_model()
    labels = BUNDLE.get_labels()
    index_of = {label: index for index, label in enumerate(labels)}
    separator = index_of["|"]
    rate = BUNDLE.sample_rate

    pieces = [
        piece_timed(model, index_of, separator, rate, piece)
        for piece in args["pieces"]
    ]
    print(json.dumps({"pieces": pieces}, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
