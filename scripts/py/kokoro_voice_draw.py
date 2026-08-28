"""Voices that belong to nobody, drawn from Kokoro's own voices, one per seed.

THE SEED IS THE VOICE.  A draw nobody can reproduce cannot come back and read
the rest of the bible, so a seed is the whole recipe and nothing else is stored
- not the style array, not the sample.  Name a seed and the same speaker
returns.

Kokoro indexes a style by phoneme count - `voice[len(tokens) - 1]` - so one
utterance only ever uses one row of 256 floats out of the 510.  A draw made
separately per row would therefore change speaker whenever a sentence changed
length, so each of the 256 coordinates is drawn once and held down all 510
rows.

DRAWING PER COORDINATE, NOT AVERAGING.  An average of many voices always lands
between them, so every average of a wide pool sounds like the same middle
person; drawing each coordinate whole from one voice does not converge that
way.  It also spreads the draw across every voice in the pool, which is what
keeps a drawn voice from being a thin disguise over one real speaker - the
share held by the largest contributor is reported so that claim can be checked
rather than trusted.

Usage:
    python kokoro_voice_draw.py                  rewrites the whole cast
    python kokoro_voice_draw.py 1003 out.mp3     one seed, reading John 1:1
    python kokoro_voice_draw.py 1003 out.mp3 "..."   one seed, reading that
"""

import json
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import MODEL_PATH, VOICES_PATH, SPEED, write_mp3  # noqa: E402
from kokoro_onnx import Kokoro  # noqa: E402
from misaki import en  # noqa: E402

VERSE = (
    "In the beginning was the Word, and the Word was with God, "
    "and the Word was God."
)

CAST_SEEDS = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]

CAST_DIR = Path.home() / "a/user/audio/samples/cast"


def male_voice_names(kokoro):
    """The English male voices, which are the pool every cast voice is drawn from."""
    names = sorted(kokoro.get_voices())
    return [n for n in names if n[0] in "ab" and n[1] == "m"]


def voice_drawn(kokoro, seed, names):
    """One style array, each coordinate taken whole from one voice of the pool.

    Returns the style and, beside it, how many of the pool were used and what
    share the largest contributor took, so a caller can say how mixed the voice
    actually is instead of assuming.
    """
    styles = np.stack([kokoro.get_voice_style(n) for n in names])
    voices, rows, one, width = styles.shape
    rng = np.random.default_rng(seed)
    pick = rng.integers(0, voices, size=width)
    style = np.empty((rows, one, width), dtype=styles.dtype)
    for coordinate in range(width):
        style[:, :, coordinate] = styles[pick[coordinate], :, :, coordinate]
    counts = np.bincount(pick, minlength=voices)
    note = {
        "seed": seed,
        "drawn_from": list(names),
        "distinct_voices_used": int((counts > 0).sum()),
        "largest_share": round(float(counts.max()) / width, 4),
        "largest_share_voice": names[int(counts.argmax())],
    }
    return style, note


def voice_drawn_speak(kokoro, g2p, seed, names, text, path):
    """Writes one mp3 of one text read in the voice that seed draws."""
    style, note = voice_drawn(kokoro, seed, names)
    phonemes, _ = g2p(text)
    samples, rate = kokoro.create(phonemes, voice=style, speed=SPEED, is_phonemes=True)
    write_mp3(path, samples, rate)
    note["voice"] = "male_draw_%d" % seed
    note["bytes"] = path.stat().st_size
    note["peak"] = round(float(np.abs(samples).max()), 4)
    return note


def loaded():
    kokoro = Kokoro(MODEL_PATH, VOICES_PATH)
    g2p = en.G2P(trf=False, british=False, fallback=None)
    return kokoro, g2p, male_voice_names(kokoro)


def cast_write():
    """Rewrites every cast sample and the note beside them saying how each was drawn."""
    CAST_DIR.mkdir(parents=True, exist_ok=True)
    kokoro, g2p, names = loaded()
    written = []
    for seed in CAST_SEEDS:
        path = CAST_DIR / ("male_draw_%d.mp3" % seed)
        note = voice_drawn_speak(kokoro, g2p, seed, names, VERSE, path)
        written.append(note)
        print(json.dumps({k: note[k] for k in note if k != "drawn_from"}), flush=True)
    (CAST_DIR / "cast.json").write_text(
        json.dumps({"text": VERSE, "speed": SPEED, "voices": written}, indent=2),
        encoding="utf-8",
    )
    return {"written": len(written), "folder": str(CAST_DIR)}


def main():
    argv = sys.argv[1:]
    if not argv:
        print(json.dumps(cast_write()))
        return
    seed = int(argv[0])
    path = Path(argv[1])
    text = argv[2] if len(argv) > 2 else VERSE
    kokoro, g2p, names = loaded()
    note = voice_drawn_speak(kokoro, g2p, seed, names, text, path)
    note["path"] = str(path)
    print(json.dumps({k: note[k] for k in note if k != "drawn_from"}))


if __name__ == "__main__":
    main()
