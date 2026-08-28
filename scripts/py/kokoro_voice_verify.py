"""Does a speaker-verification system recognise a drawn voice as one of the real ones?

THIS IS THE QUESTION THE STYLE-VECTOR DISTANCE COULD NOT ANSWER.  Its companion
script compares the numbers Kokoro uses internally to mean "who is speaking",
which is the generator's own opinion of identity.  This one throws all of that
away and does what a person worried about their voice would actually do: it
listens to the recording.  ECAPA-TDNN, trained on VoxCeleb, was built to answer
exactly one question - are these two recordings the same person - and it answers
it with a threshold it came with rather than one chosen here.

EVERY COMPARISON IS OF TWO DIFFERENT SENTENCES.  Two recordings of the same words
in the same voice are near-identical waveforms, and a system asked about those is
being handed the answer.  Each voice reads two passages, and nothing is ever
compared against itself.

THE TWO CONTROLS DECIDE WHETHER THE ANSWER MEANS ANYTHING.  A verifier that said
"different speaker" to everything would clear every drawn voice while proving
nothing, so each real voice is checked against itself across the two passages and
has to come back as the same person.  A verifier that said "same speaker" to
everything would be caught by the other control, which is every pair of real
voices - two of which are close enough to be the hard case.  A drawn voice is
only cleared if the verifier passes both controls first.

WHAT A CLEAR RESULT WOULD AND WOULD NOT MEAN.  Cleared here means one widely used
verification model, at its own threshold, does not match a drawn voice to any of
the thirteen real speakers Kokoro ships.  It does not mean no system ever could,
and it says nothing about whoever those thirteen voices were recorded from in the
first place.  The honest claim is the narrow one.

Usage:
    python kokoro_voice_verify.py
"""

import json
import sys
from pathlib import Path

import numpy as np
import torch
import torchaudio

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import SPEED  # noqa: E402
from kokoro_voice_draw import CAST_SEEDS, loaded, voice_drawn  # noqa: E402

PASSAGE_ONE = (
    "In the beginning was the Word, and the Word was with God, "
    "and the Word was God."
)

PASSAGE_TWO = (
    "The Lord is my shepherd; I shall not want. He makes me lie down "
    "in green pastures; he leads me beside still waters."
)

MODEL_NAME = "speechbrain/spkrec-ecapa-voxceleb"

MODEL_DIR = Path.home() / "a/user/speechbrain/spkrec-ecapa-voxceleb"

VERIFIER_RATE = 16000


def spoken(kokoro, g2p, voice, text):
    """One passage read in one voice, as a mono waveform at the verifier's rate."""
    phonemes, _ = g2p(text)
    samples, rate = kokoro.create(phonemes, voice=voice, speed=SPEED, is_phonemes=True)
    wave = torch.from_numpy(np.asarray(samples, dtype=np.float32))
    resampled = torchaudio.functional.resample(wave, rate, VERIFIER_RATE)
    return resampled


def verifier():
    """The verification model, downloaded once and kept on this disk."""
    from speechbrain.inference.speaker import SpeakerRecognition

    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    return SpeakerRecognition.from_hparams(source=MODEL_NAME, savedir=str(MODEL_DIR))


def compared(model, left, right):
    """What the verifier says about two waveforms: its score and its own verdict."""
    score, same = model.verify_batch(left.unsqueeze(0), right.unsqueeze(0))
    return round(float(score.item()), 4), bool(same.item())


def voices_read(kokoro, g2p, names):
    """Both passages read by every real voice and by every drawn one."""
    read = {}
    for name in names:
        read[name] = [
            spoken(kokoro, g2p, name, PASSAGE_ONE),
            spoken(kokoro, g2p, name, PASSAGE_TWO),
        ]
    for seed in CAST_SEEDS:
        style, _ = voice_drawn(kokoro, seed, names)
        read["draw_%d" % seed] = [
            spoken(kokoro, g2p, style, PASSAGE_ONE),
            spoken(kokoro, g2p, style, PASSAGE_TWO),
        ]
    return read


def scored(pairs):
    """The shape of a set of comparisons: how many said same speaker, and the range."""
    values = [p["score"] for p in pairs]
    return {
        "comparisons": len(pairs),
        "said_same_speaker": sum(1 for p in pairs if p["same"]),
        "max": max(values),
        "mean": round(float(np.mean(values)), 4),
        "min": min(values),
    }


def main():
    kokoro, g2p, names = loaded()
    model = verifier()
    read = voices_read(kokoro, g2p, names)
    draws = ["draw_%d" % s for s in CAST_SEEDS]

    itself = []
    for name in names:
        score, same = compared(model, read[name][0], read[name][1])
        itself.append({"voice": name, "score": score, "same": same})

    across = []
    for i, left in enumerate(names):
        for right in names[i + 1:]:
            score, same = compared(model, read[left][0], read[right][1])
            across.append({"left": left, "right": right, "score": score, "same": same})
    across.sort(key=lambda p: -p["score"])

    drawn_itself = []
    for draw in draws:
        score, same = compared(model, read[draw][0], read[draw][1])
        drawn_itself.append({"voice": draw, "score": score, "same": same})

    drawn_against_real = []
    for draw in draws:
        rows = []
        for name in names:
            score, same = compared(model, read[draw][0], read[name][1])
            rows.append({"real": name, "score": score, "same": same})
        rows.sort(key=lambda p: -p["score"])
        drawn_against_real.append({
            "voice": draw,
            "nearest_real": rows[0]["real"],
            "nearest_score": rows[0]["score"],
            "matched_any": any(r["same"] for r in rows),
            "matched": [r["real"] for r in rows if r["same"]],
        })

    nearest = [{"score": d["nearest_score"], "same": d["matched_any"]}
               for d in drawn_against_real]

    controls_held = (
        all(r["same"] for r in itself)
        and not any(p["same"] for p in across)
    )

    print(json.dumps({
        "model": MODEL_NAME,
        "controls_held": controls_held,
        "real_voice_against_itself": scored(itself),
        "real_voice_against_another": scored(across),
        "closest_real_pair": across[0] if across else None,
        "drawn_voice_against_itself": scored(drawn_itself),
        "drawn_voice_nearest_real": scored(nearest),
        "drawn_voices_matched_to_a_real_speaker":
            [d["voice"] for d in drawn_against_real if d["matched_any"]],
        "draws": drawn_against_real,
    }, indent=1))


if __name__ == "__main__":
    main()
