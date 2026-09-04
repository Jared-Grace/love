"""How every Bible name is to be said, in the notation the reader speaks in.

The reader holds a general English dictionary, and a Bible name is not general
English.  What is not in that dictionary is sounded out letter by letter, which
is where Boaz became BOZE, Obed became OBD, and Salmon became the fish.
Measured over the 1190 chapters being recorded: of the 3385 capitalised words
in them, 2722 are sounded out rather than read.

BibleVox answers 2589 of those 2722.  It is a pronunciation lexicon for the
Bible, MIT licensed, kept beside this file as given, notice and all.  It is
written for a different speech engine, so its sounds are in the alphabet that
engine reads and have to be carried across into this one, which is what the
table below is for.

  fetched from  https://github.com/MEAdams/BibleVox
  the one file  Tools/Lexes/BibleVoxLex.scm

★ ONLY ITS PROPER NOUNS ARE TAKEN.  The two hundred ordinary words it also
carries are there because the engine it was written for needed to be told
which of two readings a homograph takes in a verse - bow, lead, tear, wind -
and a lexicon entry here cannot be told which verse it is in.  Filing one
reading of a homograph would fix half its occurrences and break the other
half.  A proper noun has no such second reading, so it can be filed flat.
Anything ordinary that this book still says wrongly belongs in the
hand-written file instead, where a person has looked at it.
"""

import json
import re
from pathlib import Path

LEXICON_PATH = Path(__file__).resolve().parents[1] / "data/given/biblevox_lexicon.scm"
SAID_PATH = Path(__file__).resolve().parents[1] / "data/given/speech_pronunciations.json"

ENTRY = re.compile(r"""\(lex\.add\.entry\s*'?\(\s*"([^"]+)"\s+(\S+)\s+(.*?)\)\s*\)""", re.S)
SYLLABLE = re.compile(r"\(\s*\(([^()]*)\)\s*(\d)\s*\)")

NAMED_TAGS = frozenset({"nnp", "nnps"})

VOWELS = {
    "aa": "ɑ",
    "ae": "æ",
    "ah": "ʌ",
    "ao": "ɔ",
    "aw": "W",
    "ax": "ə",
    "ay": "I",
    "eh": "ɛ",
    "ehc": "ɛ",
    "er": "ɜɹ",
    "ey": "A",
    "ih": "ɪ",
    "iy": "i",
    "ow": "O",
    "oy": "Y",
    "uh": "ʊ",
    "uw": "u",
}

UNSTRESSED = {"er": "əɹ", "ah": "ə"}

CONSONANTS = {
    "b": "b",
    "ch": "ʧ",
    "d": "d",
    "dh": "ð",
    "f": "f",
    "g": "ɡ",
    "hh": "h",
    "jh": "ʤ",
    "k": "k",
    "l": "l",
    "m": "m",
    "n": "n",
    "ng": "ŋ",
    "p": "p",
    "r": "ɹ",
    "s": "s",
    "sh": "ʃ",
    "t": "t",
    "th": "θ",
    "v": "v",
    "w": "w",
    "y": "j",
    "z": "z",
    "zh": "ʒ",
}

PRIMARY = "ˈ"
SECONDARY = "ˌ"


def misaki_of(syllables):
    """Writes one word's syllables in the reader's own notation.

    ★ THE STRESS MARK GOES IMMEDIATELY BEFORE THE VOWEL, NOT BEFORE THE
    SYLLABLE.  Read back out of the dictionary the reader ships with: letter is
    lˈɛɾəɹ and about is əbˈWt, so the mark sits after whatever consonants open
    the syllable.  Putting it at the front of the syllable instead is silently
    wrong - the word still speaks, with the stress in the wrong place.

    The lexicon marks a syllable stressed or unstressed and nothing between, so
    the first stressed syllable is read as the primary one and any later
    stressed syllable as secondary.  A word with no stressed syllable at all
    gets its primary on the first, because the reader restresses a proper noun
    that arrives without one and would rather be told where.
    """
    stressed = [i for i, (_, mark) in enumerate(syllables) if mark == "1"]
    first = stressed[0] if stressed else 0
    out = []
    for i, (phones, mark) in enumerate(syllables):
        if i == first:
            stress = PRIMARY
        elif mark == "1":
            stress = SECONDARY
        else:
            stress = ""
        said = False
        for phone in phones:
            if phone in VOWELS:
                if not said:
                    out.append(stress)
                    said = True
                unstressed = mark == "0" and i != first
                out.append(UNSTRESSED[phone] if unstressed and phone in UNSTRESSED else VOWELS[phone])
            elif phone in CONSONANTS:
                out.append(CONSONANTS[phone])
            else:
                return None
        if not said:
            return None
    return "".join(out)


def lexicon_named():
    """Every proper noun the given lexicon holds, said in the reader's notation."""
    text = LEXICON_PATH.read_text(encoding="utf-8")
    named = {}
    for word, tag, body in ENTRY.findall(text):
        if tag not in NAMED_TAGS:
            continue
        syllables = [
            (phones.split(), mark) for phones, mark in SYLLABLE.findall(body)
        ]
        if not syllables:
            continue
        sounds = misaki_of(syllables)
        if sounds is not None:
            named[word] = sounds
    return named


def pronunciations():
    """How this repo wants every word said, the hand-written answers winning.

    A name is filed under the spelling the Bible writes it with and under no
    other, so a name that is also an ordinary word leaves the ordinary word
    alone.  The reason that is enough is measured in text_to_speech.g2p_ready.
    """
    said = lexicon_named()
    said.update(json.loads(SAID_PATH.read_text(encoding="utf-8")))
    return said
