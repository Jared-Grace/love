"""Speaks a handful of words several different ways, so a person can hear
which way is the one that sounds wrong.

This exists because the fault being chased is one nobody here can measure.
A person reported that a single word button sounds distorted, that "the"
does not sound like "the", and that "with" carries a sound after it that a
speaker would not say.  Silence detection found nothing, and loudness
envelopes did not settle it either.  So the remaining honest move is to
make the same word several ways along the axes that could plausibly be at
fault, and let ears decide - which is what this writes.

The axes, one per suspect:

  raw    - the samples as the model made them, written lossless.  If this
           sounds clean and the mp3 beside it does not, the fault is the
           encoder and nothing else.
  mp3_04 - what is shipping today, libsndfile MP3 at compression level 0.4.
  mp3_00 - the same samples at libsndfile's best mp3 setting.
  dot    - the word with a full stop after it.  A speech model is trained
           on sentences, and a bare word with no punctuation is not a
           sentence; the punctuation changes the prosody it reaches for.
  voices - the same word in other voices, because the one in use was
           picked without ever being compared to another.

Run it under the speech venv:

    /home/j/a/user/venv_speech/bin/python ./scripts/py/word_sound_variants.py

It prints the phonemes it used for each word, which is its own answer to
"that is not the sound of 'the'" - if the phonemes are wrong, no amount of
encoder quality will fix it.
"""

import sys
from pathlib import Path

import soundfile as sf

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import engine_ready  # noqa: E402

WORDS = ["the", "with", "baptized", "righteousness"]
VOICES = ["am_adam", "am_michael", "am_eric", "bm_george", "af_heart"]
OUT = Path(__file__).resolve().parents[2] / "web/dev/sound_test"


def write_sound(path, samples, rate, kind):
    """Writes one mono file, lossless or mp3 at a stated level."""
    if kind == "wav":
        sf.write(str(path), samples, rate, subtype="PCM_16")
        return
    with sf.SoundFile(
        str(path),
        "w",
        samplerate=rate,
        channels=1,
        format="MP3",
        compression_level=kind,
    ) as f:
        f.write(samples)


def spoken(engine, text, voice):
    """The samples for one piece of text in one voice, and its phonemes."""
    phonemes, _ = engine["g2p"](text)
    samples, rate = engine["kokoro"].create(
        phonemes, voice=voice, speed=1.0, is_phonemes=True
    )
    return samples, rate, phonemes


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    engine = engine_ready(1)
    written = []
    for word in WORDS:
        samples, rate, phonemes = spoken(engine, word, "am_adam")
        print(f"{word}: phonemes={phonemes!r} rate={rate} samples={len(samples)}")
        write_sound(OUT / f"{word}__raw.wav", samples, rate, "wav")
        write_sound(OUT / f"{word}__mp3_04.mp3", samples, rate, 0.4)
        write_sound(OUT / f"{word}__mp3_00.mp3", samples, rate, 0.0)
        written += [f"{word}__raw.wav", f"{word}__mp3_04.mp3", f"{word}__mp3_00.mp3"]

        dotted, rate, dot_phonemes = spoken(engine, f"{word}.", "am_adam")
        print(f"{word}. : phonemes={dot_phonemes!r}")
        write_sound(OUT / f"{word}__dot.wav", dotted, rate, "wav")
        written.append(f"{word}__dot.wav")

        for voice in VOICES:
            try:
                other, rate, _ = spoken(engine, word, voice)
            except Exception as e:
                print(f"  voice {voice} refused: {e!r}")
                continue
            write_sound(OUT / f"{word}__voice_{voice}.wav", other, rate, "wav")
            written.append(f"{word}__voice_{voice}.wav")
    print(f"wrote {len(written)} files into {OUT}")


if __name__ == "__main__":
    main()
