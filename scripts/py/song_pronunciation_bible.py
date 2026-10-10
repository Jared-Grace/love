"""How the audio Bible says each name, spelled in plain letters a song generator can read.

The audio Bible's reader is told how to say a name in sound symbols, and a song
generator reads only plain letters, so the same decision has to be written a
second way before a song can follow it.  The decision itself is not made here:
it is read from bible_pronunciations, the hand-written answers winning over
BibleVox exactly as they do for the reader, so a song and the audio Bible can
only ever disagree where somebody wrote a song spelling by hand.

★ THE SPELLING FOLLOWS A RESPELLING KEY, NOT ENGLISH SPELLING RULES.  ee, ay,
oh, oo, ah, aw, eye are each one sound however they sit, which is what lets a
generator that has never seen the name read it back.  A short vowel left open
at the end of a syllable is written with an h after it - ih, eh, uh - because
a bare i or e there would be read long.  A g before e, i or y is written gh, or
it would be read as j.

★ THE STRESS IS NOT WRITTEN.  The hand-made spellings beside it carry none, and
capitals are the only mark a generator might honour and the one most likely to
be read as letters spelled out.  The stress is still in the sound returned with
it, for whoever is checking.

Run it under the speech python with one argument, a file holding {"words": [...]}.
It prints one line: each word with its sound and its spelling, both null when
the audio Bible holds no saying for it, and the spelling alone null when the
sound uses a symbol the key below does not know.
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from bible_pronunciations import (  # noqa: E402
    lexicon_text_now,
    pronunciations,
    said_text_now,
)

STRESSES = frozenset("ˈˌ")

VOWELS = {
    "i": "ee",
    "ɪ": "i",
    "A": "ay",
    "ɛ": "e",
    "æ": "a",
    "ɑ": "ah",
    "ɔ": "aw",
    "O": "oh",
    "ʊ": "uu",
    "u": "oo",
    "ʌ": "u",
    "ə": "uh",
    "I": "eye",
    "W": "ow",
    "Y": "oy",
    "ɜ": "ur",
}

OPEN_SHORT = {"i": "ih", "e": "eh", "u": "uh"}

CONSONANTS = {
    "b": "b",
    "d": "d",
    "f": "f",
    "ɡ": "g",
    "h": "h",
    "j": "y",
    "k": "k",
    "l": "l",
    "m": "m",
    "n": "n",
    "ŋ": "ng",
    "p": "p",
    "ɹ": "r",
    "s": "s",
    "ʃ": "sh",
    "t": "t",
    "ɾ": "t",
    "v": "v",
    "w": "w",
    "z": "z",
    "ʒ": "zh",
    "θ": "th",
    "ð": "dh",
    "ʧ": "ch",
    "ʤ": "j",
}

SYLLABIC = "ᵊ"

ONSETS = frozenset(
    {
        "pɹ", "bɹ", "tɹ", "dɹ", "kɹ", "ɡɹ", "fɹ", "θɹ", "ʃɹ",
        "pl", "bl", "kl", "ɡl", "fl", "sl",
        "sp", "st", "sk", "sm", "sn", "sw", "tw", "kw", "dw",
    }
)

SHORT = frozenset("ɪɛæʌʊ")


def nuclei_of(sound):
    """The sound cut into vowels and the consonants between them.

    Each vowel is one syllable's nucleus.  ɜɹ is one vowel, the r is part of
    it.  A syllabic mark makes the consonant after it the nucleus, as in
    Michael's final l.  Returns (parts, stressed, unknown): parts alternates
    consonant runs and nuclei, starting and ending with a run, and stressed
    says of each nucleus whether a stress mark stood before it.
    """
    parts = [[]]
    stressed = []
    pending = False
    chars = list(sound)
    at = 0
    while at < len(chars):
        c = chars[at]
        if c in STRESSES:
            pending = True
            at += 1
            continue
        if c == "ɜ" and at + 1 < len(chars) and chars[at + 1] == "ɹ":
            nucleus, width = "ɜ", 2
        elif c == SYLLABIC and at + 1 < len(chars):
            nucleus, width = SYLLABIC + chars[at + 1], 2
        elif c in VOWELS:
            nucleus, width = c, 1
        elif c in CONSONANTS:
            parts[-1].append(c)
            at += 1
            continue
        else:
            return None, None, c
        parts.append(nucleus)
        parts.append([])
        stressed.append(pending)
        pending = False
        at += width
    return parts, stressed, None


def syllables_of(parts, stressed):
    """Each syllable as (onset, nucleus, coda), consonants between vowels shared out.

    The next syllable takes the longest run of consonants that can open an
    English word, so Ephraim is ee-fray-im and not eef-ray-im.  A short vowel
    under stress keeps one consonant, because English never ends a stressed
    syllable on one: Bethany is beth-uh-nee.
    """
    runs = parts[0::2]
    nuclei = parts[1::2]
    syllables = [[runs[0], n, []] for n in nuclei]
    for at in range(1, len(nuclei)):
        run = runs[at]
        take = 0
        if len(run) >= 1:
            take = 1
        if len(run) >= 2 and "".join(run[-2:]) in ONSETS:
            take = 2
        if (
            take == len(run)
            and take > 0
            and nuclei[at - 1] in SHORT
            and stressed[at - 1]
        ):
            take -= 1
        syllables[at - 1][2] = run[: len(run) - take]
        syllables[at][0] = run[len(run) - take :]
    if syllables:
        syllables[-1][2] = runs[-1]
    return syllables


def letters_of(phones):
    return "".join(CONSONANTS[p] for p in phones)


def syllable_spelled(onset, nucleus, coda):
    if nucleus.startswith(SYLLABIC):
        middle = "u" + CONSONANTS[nucleus[1]]
    else:
        middle = VOWELS[nucleus]
        if not coda and middle in OPEN_SHORT:
            middle = OPEN_SHORT[middle]
    head = letters_of(onset)
    if head.endswith("g") and middle[0] in "eiy":
        head += "h"
    if nucleus == "I" and head:
        middle = "y" if not coda else "igh"
    return head + middle + letters_of(coda)


def spelling_of(sound):
    """The sound in plain letters, or None and the first symbol nobody mapped."""
    parts, stressed, unknown = nuclei_of(sound)
    if parts is None:
        return None, unknown
    syllables = syllables_of(parts, stressed)
    return "-".join(syllable_spelled(*s) for s in syllables), None


def said_of(said, word):
    for key in (word, word.capitalize()):
        if key in said:
            return said[key]
    return None


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    said = pronunciations(lexicon_text_now(), said_text_now())
    report = {}
    for word in args["words"]:
        sound = said_of(said, word)
        spelling, unknown = (None, None) if sound is None else spelling_of(sound)
        report[word] = {"sound": sound, "spelling": spelling, "unknown": unknown}
    print(json.dumps(report, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
