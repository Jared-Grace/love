"""Speaks a piece of text into a folder of numbered sound files.

Called as `python text_to_speech.py <json_file>`, where the file holds
{"text": ..., "path_output": ...}.  Writes `{i}.mp3` and `{i}.txt` into
path_output, numbered from zero.

THE RECORDING IS MP3 AND IT IS WRITTEN DIRECTLY, WITHOUT ffmpeg.
libsndfile 1.2.2 is installed and lists MP3 among the formats it can
write, so the encode happens in the same call that used to write the wav
rather than in a second process reading the first one's output.  Measured
on an existing 30 second reading, the wav is 1,462,844 bytes and the mp3
is 222,120 - 6.59 times smaller, which over a whole Bible in one voice is
12.99 GiB against 1.97 GiB.  That ratio is the reason the format changed:
a full cast, or every voice the model has, is a disk question before it is
a compute question.

THE COMPRESSION LEVEL IS STATED AT 0.4 BECAUSE THAT IS WHAT WAS MEASURED.
libsndfile does not document its default and passing nothing leaves it to
a library the repo does not pin.  0.2, 0.3 and 0.4 were written and their
sizes compared, and 0.4 alone came out byte-identical to passing nothing.
So naming it changes no recording today and stops a library update from
silently changing every recording tomorrow.  1.0 is not a choice - it
throws.

THE LINE BREAK IS THE SEAM AND THIS SCRIPT OBEYS IT RATHER THAN GUESSING.
The caller joins verses with a line break on purpose, so one line becomes
one sound file, always.  The pipeline this replaced let the engine choose
its own cuts near a token budget, which is how thousands of files on this
disk ended up unable to say where a verse begins.  Splitting here is a
loop over lines, so the count of files and the count of verses cannot
disagree.

A BLANK LINE STILL GETS A FILE, HOLDING A QUARTER SECOND OF SILENCE.
The note written beside the recording pairs the first piece with the
first verse, the second with the second, and so on by position, so
dropping a piece would not lose one verse - it would shift every verse
after it onto the wrong sound.  A silent file keeps the positions true
and says plainly that the verse handed over had nothing in it.

A LONG LINE IS STILL ONE FILE, SPOKEN IN SENTENCES AND JOINED BACK UP.
The model takes a bounded number of phonemes at a time, so a verse past
that bound has to be spoken in pieces - but the pieces are concatenated
into the single file the verse is owed.  The cut is made at
end-of-sentence punctuation, which is this repo's own convention for
breaking a verse and which measured closest to the pacing of the
recordings already on disk (-2.35% against -3.82% for one shot).

MANY CHAPTERS MAY BE HANDED OVER AT ONCE, AND THAT IS WHAT MAKES A WHOLE
BIBLE REACHABLE.  Given {"jobs": [...]} instead of one text, this speaks
them across several processes that each load the model once and then
drain the list.  One chapter per process cost two things at once - the
model was read off disk again for every chapter, and thirteen of the
fourteen cores sat idle while one of them spoke.  Measured, one process
records at 0.39 times real time and three at 0.85, so the Bible's 1,189
chapters go from about 253 hours to about 116.

THREE PROCESSES IS A MEASUREMENT AND NOT A GUESS, AND IT IS STATED HERE
SO IT CAN BE RE-MEASURED.  The engine is already threaded, so processes
past the point where they start queueing for the same cores buy nothing
and cost a copy of the model in memory each.  Each worker is held to a
share of the cores for the same reason: three workers each taking all
fourteen is fourteen cores being asked for forty two.
"""

import json
import multiprocessing
import os
import re
import sys
from pathlib import Path

import numpy as np
import soundfile as sf

sys.stdout.reconfigure(encoding="utf-8")

MODEL_PATH = str(Path.home() / "a/user/kokoro/kokoro-v1.0.onnx")
VOICES_PATH = str(Path.home() / "a/user/kokoro/voices-v1.0.bin")
VOICE = "am_adam"
SPEED = 0.75
PHONEME_LIMIT = 480
COMPRESSION_LEVEL = 0.4
WORKERS = 3

ENGINE = {}


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


def engine_ready(threads):
    """Loads the voice model into this process once, and keeps it for every later job.

    The model is a third of a gigabyte read off disk, so a process that
    speaks twenty chapters must read it once rather than twenty times.
    The thread count is set before the session is built because that is
    when the runtime reads it; setting it afterwards changes nothing.
    """
    if ENGINE:
        return ENGINE
    os.environ["OMP_NUM_THREADS"] = str(threads)
    from kokoro_onnx import Kokoro
    from misaki import en

    ENGINE["g2p"] = en.G2P(trf=False, british=False, fallback=None)
    ENGINE["kokoro"] = Kokoro(MODEL_PATH, VOICES_PATH)
    return ENGINE


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


def write_mp3(path, samples, rate):
    """Writes one mono mp3 at the stated compression level."""
    with sf.SoundFile(
        str(path),
        "w",
        samplerate=rate,
        channels=1,
        format="MP3",
        compression_level=COMPRESSION_LEVEL,
    ) as f:
        f.write(samples)


def job_spoken(job):
    """Speaks one chapter into its own folder, and says what it wrote.

    A job that throws is reported rather than raised, because one bad
    chapter must not take the other workers' finished chapters down with
    it - a run of a whole book is hours long, and the report is how the
    caller finds out which chapters need asking for again.
    """
    threads, text, path_output = job["threads"], job["text"], job["path_output"]
    try:
        engine = engine_ready(threads)
        out_dir = Path(path_output)
        out_dir.mkdir(parents=True, exist_ok=True)
        lines = [line.strip() for line in text.split("\n")]
        silent = 0
        for i, line in enumerate(lines):
            samples, rate = line_samples(engine["g2p"], engine["kokoro"], line)
            if samples is None:
                samples = np.zeros(int(rate / 4), dtype=np.float32)
                silent += 1
            write_mp3(out_dir / f"{i}.mp3", samples, rate)
            with open(out_dir / f"{i}.txt", "w", encoding="utf-8") as f:
                f.write(line)
        return {"lines": len(lines), "silent": silent, "folder": path_output}
    except Exception as e:
        return {"folder": path_output, "spoken": False, "error": repr(e)}


def jobs_of(data):
    """The chapters this call was asked for, whether it named one or a list."""
    if "jobs" in data:
        return list(data["jobs"])
    return [{"text": data["text"], "path_output": data["path_output"]}]


def main():
    if len(sys.argv) < 2:
        print("Usage: python text_to_speech.py <json_file>")
        sys.exit(1)

    with open(sys.argv[1], "r", encoding="utf-8") as f:
        data = json.loads(f.read())

    jobs = jobs_of(data)
    workers = min(int(data.get("workers", WORKERS)), len(jobs))
    threads = max(1, (os.cpu_count() or workers) // max(1, workers))
    for job in jobs:
        job["threads"] = threads

    if workers < 2:
        reports = [job_spoken(job) for job in jobs]
    else:
        with multiprocessing.Pool(workers) as pool:
            reports = pool.map(job_spoken, jobs, chunksize=1)

    if "jobs" not in data:
        print(json.dumps(reports[0]))
        return
    spoken = [r for r in reports if r.get("spoken") is not False]
    print(json.dumps({
        "chapters": len(reports),
        "spoken": len(spoken),
        "workers": workers,
        "threads_each": threads,
        "failed": [r for r in reports if r.get("spoken") is False],
        "reports": reports,
    }))


if __name__ == "__main__":
    main()
