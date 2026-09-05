"""Speaks the same word from several different phoneme spellings.

Why this is separate from the other experiment.  That one varied how the
sound was *recorded* - encoder, level, voice.  This one varies what the
model was *asked to say*, which is a different suspect and a better one.

The reason to suspect it.  Asked for "the" on its own, the phonemizer
answers `ðə` - a schwa with no stress mark anywhere in it.  That is the
right answer for "the" sitting inside a sentence, where it is unstressed
and reduced almost to nothing.  It is the wrong answer for a word being
said on its own to teach somebody what it sounds like: a person asked to
say "the" by itself says it in citation form, stressed.  An unstressed
reduced vowel is exactly what is heard as a mumble.

And asked for "with", it answers `wɪð` - a *voiced* th.  A voiced fricative
at the end of a word said in isolation is released audibly, because there
is no following word to run into.  That release is a vowel-like puff after
the word, which is what "with-uh" describes.

So each word here is spoken from several spellings, lossless, and named
after the spelling that made it, so the file name says what was tried.

Run it under the speech venv:

    /home/j/a/user/venv_speech/bin/python ./scripts/py/word_sound_phonemes.py
"""

import sys
from pathlib import Path

import soundfile as sf

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import engine_ready  # noqa: E402

VOICE = "am_adam"
OUT = Path(__file__).resolve().parents[2] / "web/dev/sound_test"

SPELLINGS = {
    "the": ["ðə", "ðˈʌ", "ðˈi", "ðˈə"],
    "with": [
        "wɪð",
        "wˈɪθ",
        "wˈɪð",
        "wɪθ",
    ],
    "and": ["ænd", "ˈænd"],
    "of": ["ʌv", "ˈʌv"],
}


def safe_name(phonemes):
    """A file name that says which spelling made the sound, without symbols."""
    return "".join(f"{ord(c):04x}" for c in phonemes)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    engine = engine_ready(1)
    written = 0
    for word, spellings in SPELLINGS.items():
        for spelling in spellings:
            samples, rate = engine["kokoro"].create(
                spelling, voice=VOICE, speed=1.0, is_phonemes=True
            )
            name = f"{word}__say_{safe_name(spelling)}.wav"
            sf.write(str(OUT / name), samples, rate, subtype="PCM_16")
            print(f"{word}: {spelling!r} -> {name} ({len(samples)} samples)")
            written += 1
    print(f"wrote {written} files into {OUT}")


if __name__ == "__main__":
    main()
