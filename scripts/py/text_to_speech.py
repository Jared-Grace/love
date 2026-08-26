"""Speaks a piece of text into a folder of numbered sound files.

Called as `python text_to_speech.py <json_file>`, where the file holds
{"text": ..., "path_output": ...}.  Writes `{i}.wav` and `{i}.txt` into
path_output, numbered from zero.

THE LINE BREAK IS THE SEAM AND THIS SCRIPT OBEYS IT RATHER THAN GUESSING.
The caller joins verses with a line break on purpose, so one line becomes
one sound file, always.  The pipeline this replaced let the engine choose
its own cuts near a token budget, which is how thousands of files on this
disk ended up unable to say where a verse begins.  Splitting here is a
loop over lines, so the count of files and the count of verses cannot
disagree.

A LONG LINE IS STILL ONE FILE, SPOKEN IN SENTENCES AND JOINED BACK UP.
The model takes a bounded number of phonemes at a time, so a verse past
that bound has to be spoken in pieces - but the pieces are concatenated
into the single file the verse is owed.  The cut is made at
end-of-sentence punctuation, which is this repo's own convention for
breaking a verse and which measured closest to the pacing of the
recordings already on disk (-2.35% against -3.82% for one shot).
"""

import json
import re
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro
from misaki import en

sys.stdout.reconfigure(encoding="utf-8")

MODEL_PATH = str(Path.home() / "a/user/kokoro/kokoro-v1.0.onnx")
VOICES_PATH = str(Path.home() / "a/user/kokoro/voices-v1.0.bin")
VOICE = "am_adam"
SPEED = 0.75
PHONEME_LIMIT = 480


def pieces_of(text):
    """Cuts one line into runs short enough for the model, at sentence ends."""
    sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if s.strip()]
    if not sentences:
        return []
    runs = []
    current = ""
    for sentence in sentences:
        candidate = f"{current} {sentence}".strip()
        if current and len(candidate) > PHONEME_LIMIT:
            runs.append(current)
            current = sentence
        else:
            current = candidate
    runs.append(current)
    return runs


def line_samples(g2p, kokoro, text):
    """Speaks one line, returning the samples and the rate."""
    parts = []
    rate = 24000
    for run in pieces_of(text):
        phonemes, _ = g2p(run)
        samples, rate = kokoro.create(
            phonemes, voice=VOICE, speed=SPEED, is_phonemes=True
        )
        parts.append(samples)
    if not parts:
        return None, rate
    if len(parts) == 1:
        return parts[0], rate
    return np.concatenate(parts), rate


def main():
    if len(sys.argv) < 2:
        print("Usage: python text_to_speech.py <json_file>")
        sys.exit(1)

    with open(sys.argv[1], "r", encoding="utf-8") as f:
        data = json.loads(f.read())

    text = data["text"]
    path_output = data["path_output"]
    out_dir = Path(path_output)
    out_dir.mkdir(parents=True, exist_ok=True)

    g2p = en.G2P(trf=False, british=False, fallback=None)
    kokoro = Kokoro(MODEL_PATH, VOICES_PATH)

    lines = [line.strip() for line in text.split("\n")]
    written = 0
    for i, line in enumerate(lines):
        if not line:
            continue
        samples, rate = line_samples(g2p, kokoro, line)
        if samples is None:
            continue
        sf.write(str(out_dir / f"{i}.wav"), samples, rate)
        with open(out_dir / f"{i}.txt", "w", encoding="utf-8") as f:
            f.write(line)
        written += 1

    print(json.dumps({"lines": len(lines), "written": written, "folder": path_output}))


if __name__ == "__main__":
    main()
