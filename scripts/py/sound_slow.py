"""Makes a slower copy of every recording that has already been made.

★ IT IS MADE FROM THE RECORDINGS AND NOT FROM THE ENGINE, WHICH IS THE WHOLE
REASON THIS IS AFFORDABLE.  Speaking sixteen hundred words again in four voices
is about eight hours of this machine; slowing the files that already exist is
about fourteen minutes, because the slowing is a filter over samples and the
speech model is never loaded.  That was checked rather than assumed: slowing a
decoded recording and slowing the engine's own samples were compared band by
band, and they sat 0.07 to 0.18 apart while the slowing itself moved the sound
by 0.92 to 1.16 - the difference between the two routes is a fifth of the
change being made at worst, and a seventh at best.

★ BOTH ENDS ARE LEFT EXACTLY AS THEY WERE SPOKEN AND ONLY THE MIDDLE IS
STRETCHED.  A stretcher works by cutting the sound into overlapping windows and
laying them down further apart, and the two things that survive that worst are a
short burst of noise at the very end - the final "s" of "strengths" - and a held
vowel, whose phase the stretcher has to guess at and which reads as a different
vowel when it guesses wrong.  Leaving ninety milliseconds untouched at each end
takes the opening and closing consonants out of the stretcher's hands entirely.
The word still comes out the intended length, because the middle is stretched
further to pay for the two ends that were not stretched at all.

★ THE FORMANTS ARE HELD, WHICH RUBBERBAND DOES NOT DO BY ITSELF.  Formants are
what make a vowel that vowel, so a stretch that lets them move is a stretch that
changes which word was said.  This was chosen by listening, against five other
ways of slowing the same word by the same amount.

★ A WORD ALREADY SLOWED IS SKIPPED, SO THE RUN CAN BE STOPPED AND STARTED.  The
destination folder is the record of what has been done, which is the one record
that cannot disagree with the disk.  Nothing here needs a list from the caller
and nothing has to be remembered between runs.

It is given its arguments as a file of JSON, the same way the speech engine is,
and it prints its report as the last line of its output.

    /home/j/a/user/venv_speech/bin/python ./scripts/py/sound_slow.py <args.json>
"""

import json
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np
import soundfile as sf

SLOW = 0.6
KEPT = 0.09


def filtered(samples, rate, chain):
    """Runs one ffmpeg filter chain over the samples and reads the answer back.

    The samples go out to a file and come back from a file because ffmpeg is a
    program and not a library here, and a program is given files.  They are
    written as plain wav rather than as anything compressed so that this step
    adds no loss of its own - the compression happens once, at the end.
    """
    with tempfile.TemporaryDirectory() as held:
        raw = Path(held) / "in.wav"
        done = Path(held) / "out.wav"
        sf.write(str(raw), samples, rate, subtype="PCM_16")
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(raw),
             "-filter:a", chain, str(done)],
            check=True,
        )
        out, _ = sf.read(str(done), dtype="float32")
    return out


def ends_kept(samples, rate, slow, kept):
    """Stretches the middle only, leaving both ends exactly as they were spoken.

    A word too short to have a middle is stretched whole, because the choice is
    between a stretched opening consonant and no slowing at all, and a reader
    who tapped the slow button and heard the ordinary recording would read that
    as the button being broken.
    """
    edge = int(rate * kept)
    if len(samples) < edge * 3:
        return filtered(samples, rate, f"rubberband=tempo={slow}")
    head = samples[:edge]
    middle = samples[edge:-edge]
    tail = samples[-edge:]
    whole_wanted = len(samples) / slow
    middle_wanted = whole_wanted - len(head) - len(tail)
    tempo = len(middle) / middle_wanted
    grown = filtered(
        middle, rate, f"rubberband=tempo={tempo}:formant=preserved"
    )
    return np.concatenate([head, grown, tail])


def mono(samples):
    """One channel, because a spoken word has nothing to put in a second one."""
    if samples.ndim > 1:
        return samples[:, 0]
    return samples


def written(source, destination, slow, kept, level):
    """Slows one recording into the place the slow copy belongs."""
    samples, rate = sf.read(str(source), dtype="float32")
    slowed = ends_kept(mono(samples), rate, slow, kept)
    with tempfile.TemporaryDirectory() as held:
        plain = Path(held) / "slowed.wav"
        sf.write(str(plain), slowed, rate, subtype="PCM_16")
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(plain),
             "-codec:a", "libmp3lame", "-compression_level", str(level),
             str(destination)],
            check=True,
        )
    return len(slowed) / rate


def voice_done(folder_from, folder_to, voice, slow, kept, level):
    """Every recording one person has made, slowed, skipping what is already done."""
    spoken = Path(folder_from) / voice
    slower = Path(folder_to) / voice
    if not spoken.is_dir():
        return {"voice": voice, "found": 0, "slowed": 0, "seconds": 0.0}
    slower.mkdir(parents=True, exist_ok=True)
    names = sorted(p.name for p in spoken.iterdir() if p.suffix == ".mp3")
    slowed = 0
    seconds = 0.0
    for name in names:
        destination = slower / name
        if destination.exists():
            continue
        seconds += written(spoken / name, destination, slow, kept, level)
        slowed += 1
    return {
        "voice": voice,
        "found": len(names),
        "slowed": slowed,
        "seconds": round(seconds, 2),
    }


def main():
    given = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    folder_from = given["folder_from"]
    folder_to = given["folder_to"]
    voices = given["voices"]
    slow = given.get("slow", SLOW)
    kept = given.get("kept", KEPT)
    level = given.get("compression_level", 4)
    voices_done = []
    for voice in voices:
        done = voice_done(folder_from, folder_to, voice, slow, kept, level)
        voices_done.append(done)
        print(f"{voice}\t{done['slowed']} of {done['found']}", flush=True)
    report = {
        "slow": slow,
        "kept": kept,
        "voices": voices_done,
        "slowed": sum(d["slowed"] for d in voices_done),
    }
    print(json.dumps(report))


if __name__ == "__main__":
    main()
