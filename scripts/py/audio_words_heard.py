"""What a recording sounds like it says, to something that was never shown its words.

This is the opposite choice from the aligner beside it, and the two are meant to
be read together.  An aligner is handed the words and can only decide where they
fall; it therefore cannot disagree with the text, and its own score is no guard,
because the score is worked out by the very model whose confusion is in doubt.
A transcriber is told nothing, so what comes back is an independent hearing, and
how much of it matches the written text is a judgement the aligner is unable to
make about itself.

Measured on a sung psalm: the aligner's confidence was 0.367 against the psalm's
own words and 0.25 against a different psalm's, which separates nothing, while
this hearing matched 0.968 of the right words and 0.191 of the wrong ones.  The
floor the aligner ships was measured on speech and does not survive the move to
singing; an independent hearing does.

The model is Whisper as rebuilt for CTranslate2, published under the MIT licence,
weights and code alike.  It is chosen over the alignment models for this job
because it was trained on ordinary recorded audio rather than on people reading
books aloud, so singing is inside what it has heard before rather than outside
it.  Its word times are not used for placing lines: they run about four tenths of
a second early and stay about a quarter of a second out once that is taken off,
where the aligner is inside a tenth.  It is here to say what was sung, not when.

The times it does give are still worth carrying, because two independent readings
of the same line can be compared: where they disagree by more than about a third
of a second, one of them is wrong, and on a psalm whose right times were known
that flagged thirteen lines of thirty two and caught all seven that were actually
misplaced.

Takes the path of a JSON file holding {"audio": <path>, "model": <a whisper size
name>} and prints one JSON line holding every word heard with the second it
begins and the second it ends, counted from the start of the file, each with the
model's own probability for it.
"""

import json
import sys

from faster_whisper import WhisperModel


def main(args_path):
    with open(args_path) as handle:
        args = json.load(handle)

    model = WhisperModel(args["model"], device="cpu", compute_type="int8")
    segments, _info = model.transcribe(
        args["audio"],
        word_timestamps=True,
        language="en",
        vad_filter=False,
    )

    words = []
    for segment in segments:
        for word in segment.words or []:
            words.append(
                {
                    "word": word.word.strip(),
                    "start": round(word.start, 3),
                    "end": round(word.end, 3),
                    "score": round(word.probability, 3),
                }
            )

    print(json.dumps({"words": words, "count": len(words)}, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
