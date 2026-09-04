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
fourteen cores sat idle while one of them spoke.

WHAT HAS ACTUALLY BEEN MEASURED IS 0.49 TIMES REAL TIME, AND THE FIGURE
IS WRITTEN DOWN HERE BECAUSE THE FIRST ONE WAS A PROJECTION AND IT WAS
WRONG.  Jonah, four chapters, produced 461 seconds of audio in 945
seconds, with 6.96 cores busy throughout.  0.85 had been expected from a
smaller trial and was quoted before anything was recorded end to end.
Four chapters over three workers is mostly tail, so this number is a
floor rather than the steady rate, and a longer book is what would
settle it.

THE LONGEST CHAPTERS ARE STARTED FIRST, WHICH IS THE WHOLE OF THE TAIL
FIX.  Handed out in the order they were asked for, the last chapter can
be a long one that begins only once a worker comes free, and every other
worker then waits on it having nothing left to take.  Starting with the
longest leaves only short chapters to land at the end.

THREE PROCESSES IS A CHOICE THAT SHOULD BE RE-MEASURED AND NOT TRUSTED.
The engine is already threaded, so processes past the point where they
start queueing for the same cores buy nothing and cost a copy of the
model in memory each.  Each worker is held to a share of the cores for
the same reason: three workers each taking all fourteen is fourteen
cores being asked for forty two.

A WORKER ASKS WHETHER IT MAY START ANOTHER CHAPTER, AND THE ANSWER IS
READ FRESH EVERY TIME.  How many workers to run is decided once, before
any of them starts, and on a machine shared with other work that answer
goes stale while the run is still going.  Measured on 2026-08-28: three
workers were sized against 7.4 gigabytes free and were still three
workers three and a half hours later, by which time the kernel was
killing the browser and the editor to make room.  All five of that
machine's out-of-memory kills in three and a half days fell inside those
three and a half hours.  So the count decided at the start is now only a
ceiling, and each worker re-reads the machine before every chapter.

THE QUESTION IS ASKED BEFORE THE FOLDER IS MADE, WHICH IS WHAT MAKES
STOPPING SAFE.  A chapter is written piece by piece, so a worker cut off
in the middle of one leaves a folder holding some of it - and a folder
that exists counts as recorded, so that chapter would never be asked for
again.  Stopping between chapters leaves nothing half written, which is
what lets this run to a deadline and be stopped by the clock without
losing a chapter every morning.

STOPPING ENDS THE RUN RATHER THAN SLOWING IT DOWN, BECAUSE THE DISK IS
THE RECORD.  What has been recorded is on disk and what has not is
asked for again by looking at the disk, so a run that stops early costs
a relaunch and nothing else.  A worker that paused instead would go on
holding a third of a gigabyte of model weights while waiting for memory
to free, which is the opposite of what it was asked to do.
"""

import json
import multiprocessing
import os
import re
import sys
import time
from pathlib import Path

import numpy as np
import soundfile as sf

sys.stdout.reconfigure(encoding="utf-8")

SAID_PATH = Path(__file__).resolve().parents[2] / "data/given/speech_pronunciations.json"
MODEL_PATH = str(Path.home() / "a/user/kokoro/kokoro-v1.0.onnx")
VOICES_PATH = str(Path.home() / "a/user/kokoro/voices-v1.0.bin")
VOICE = "am_adam"
SPEED = 0.75
PHONEME_LIMIT = 480
COMPRESSION_LEVEL = 0.4
WORKERS = 3

ENGINE = {}


def meminfo_bytes(field):
    """One figure out of what this machine says about its memory, in bytes.

    Nothing at all when this machine will not say, which reads as no
    reason to stop rather than as a reason to stop: a machine that
    cannot be measured must not be second-guessed.
    """
    try:
        with open("/proc/meminfo", "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith(f"{field}:"):
                    return int(line.split(":")[1].strip().split(" ")[0]) * 1024
    except OSError:
        return None
    return None


def start_refusal(job):
    """Why this worker must not begin another chapter, or nothing if it may.

    Three grounds, and the clock is asked first because it is the one
    that is certain.  Both memory figures are read off the machine at
    this moment, and a machine that will not answer is not argued with.

    MEMORY FREE AND SWAP FREE ARE TWO DIFFERENT MARKS AND THE SECOND ONE
    IS THE ONE THAT SAW THE WALL COMING.  On the night this was written
    the kernel killed the browser and the editor five times, and the
    figure for available memory read seven gigabytes throughout - it
    counts pages that can be swapped out, so it goes on reporting room
    that only exists while there is somewhere to put them.  Swap free
    was 382 megabytes of twenty four gigabytes at the same moment.  When
    swap fills there is nowhere left for the kernel to go and killing
    something is all it has, so this is the mark that has to be watched.
    """
    deadline = job.get("deadline")
    if deadline is not None and time.monotonic() > deadline:
        return "the time asked for is up"
    for field, key in (("MemAvailable", "memory_floor_bytes"),
                       ("SwapFree", "swap_floor_bytes")):
        floor = job.get(key)
        if floor is None:
            continue
        free = meminfo_bytes(field)
        if free is not None and free < floor:
            have = int(free / (1024 * 1024))
            want = int(floor / (1024 * 1024))
            return f"{field} is {have} megabytes, under the {want} asked for"
    return None


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

    ENGINE["g2p"] = g2p_ready()
    ENGINE["kokoro"] = Kokoro(MODEL_PATH, VOICES_PATH)
    return ENGINE


def g2p_ready():
    """Builds the letters-to-sound step, with the fallback the reading needs.

    A word the dictionary does not hold has to go somewhere, and with no
    fallback it goes nowhere: the word is rendered as silence while the caption
    still shows it.  Measured over the 738 chapters recorded before this
    changed, that lost 11192 words across 508 of them - almost all Hebrew proper
    names, so "the son of Amittai, saying" was read as "the son of saying".  The
    fallback sounds a name out instead of dropping it.

    It is built rather than caught, so that a machine without espeak stops the
    night loudly instead of quietly recording another Bible with the names
    missing.

    This is a function of its own so that anything checking a chapter for
    dropped words asks the same object the reading speaks with.  Two copies of
    these settings would let the check pass while the reading dropped words.

    THE NAMES THIS REPO SAYS ITSELF ARE FILED IN THE READER'S OWN DICTIONARY,
    WHICH IS WHY THE CAPTION KEEPS SPELLING THE NAME THE WAY THE BIBLE DOES.
    The other way to mend a mispronounced name is to hand the voice a
    respelling - to write "Ponshus Pylut" and let the letters-to-sound step do
    what it likes with it.  That fixes the sound and breaks two things behind
    it: the words on the screen come from the same text, and so do the words
    the aligner is asked to find in the recording, so a respelling would put a
    misspelling on the video and hand the aligner letters that are not in the
    sound.  A dictionary entry changes only what is said.

    EVERY ENTRY IS FILED TWICE, UNDER THE NAME AS WRITTEN AND UNDER ITS SMALL
    LETTERS, BECAUSE THE TWO ARE SEPARATE ENTRIES AND ONLY ONE OF THEM IS EVER
    LOOKED UP.  Measured: filing "pontius" alone left "Pontius Pilate" reading
    exactly as wrongly as before, and the dictionary shipped with the model
    holds "Herod" and "herod" as two keys of its own.  A name in this book is
    almost always capitalised, so filing the small letters alone would mend
    nothing at all and say nothing about it.
    """
    from misaki import en, espeak

    g2p = en.G2P(
        trf=False, british=False, fallback=espeak.EspeakFallback(british=False)
    )
    said = json.loads(SAID_PATH.read_text(encoding="utf-8"))
    for word, sounds in said.items():
        g2p.lexicon.golds[word] = sounds
        g2p.lexicon.golds[word.lower()] = sounds
    return g2p


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

    Whether it may start at all is asked before the folder is made, so a
    chapter that is refused leaves no trace of having been considered.
    """
    threads, text, path_output = job["threads"], job["text"], job["path_output"]
    refusal = start_refusal(job)
    if refusal:
        return {"folder": path_output, "spoken": False, "stopped": refusal}
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
    jobs.sort(key=lambda job: -len(job["text"]))
    workers = min(int(data.get("workers", WORKERS)), len(jobs))
    threads = max(1, (os.cpu_count() or workers) // max(1, workers))
    seconds_at_most = data.get("seconds_at_most")
    deadline = None
    if seconds_at_most is not None:
        deadline = time.monotonic() + seconds_at_most
    for job in jobs:
        job["threads"] = threads
        job["deadline"] = deadline
        job["memory_floor_bytes"] = data.get("memory_floor_bytes")
        job["swap_floor_bytes"] = data.get("swap_floor_bytes")

    if workers < 2:
        reports = [job_spoken(job) for job in jobs]
    else:
        with multiprocessing.Pool(workers) as pool:
            reports = pool.map(job_spoken, jobs, chunksize=1)

    if "jobs" not in data:
        print(json.dumps(reports[0]))
        return
    spoken = [r for r in reports if r.get("spoken") is not False]
    stopped = [r for r in reports if r.get("stopped")]
    failed = [r for r in reports if r.get("spoken") is False and not r.get("stopped")]
    print(json.dumps({
        "chapters": len(reports),
        "spoken": len(spoken),
        "workers": workers,
        "threads_each": threads,
        "limits": {
            "seconds_at_most": seconds_at_most,
            "memory_floor_bytes": data.get("memory_floor_bytes"),
            "swap_floor_bytes": data.get("swap_floor_bytes"),
        },
        "stopped": len(stopped),
        "stopped_why": sorted({r["stopped"] for r in stopped}),
        "not_started": [r["folder"] for r in stopped],
        "failed": failed,
        "reports": reports,
    }))


if __name__ == "__main__":
    main()
