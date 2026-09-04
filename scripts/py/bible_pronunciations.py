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

LEXICON_PATH = Path(__file__).resolve().parents[2] / "data/given/biblevox_lexicon.scm"
SAID_PATH = Path(__file__).resolve().parents[2] / "data/given/speech_pronunciations.json"

ENTRY = re.compile(
    r"""\(lex\.add\.entry\s*'?\(\s*"([^"]+)"\s+(\S+)\s+(.*?)(?=\(lex\.add\.entry|\Z)""",
    re.S,
)
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
SYLLABIC = "ᵊ"


def misaki_of(syllables):
    """Writes one word's syllables in the reader's own notation.

    ★ THE STRESS MARK GOES IMMEDIATELY BEFORE THE VOWEL, NOT BEFORE THE
    SYLLABLE.  Read back out of the dictionary the reader ships with: letter is
    lˈɛɾəɹ and about is əbˈWt, so the mark sits after whatever consonants open
    the syllable.  Putting it at the front of the syllable instead is silently
    wrong - the word still speaks, with the stress in the wrong place.

    ★ THE LAST STRESSED SYLLABLE IS THE MAIN ONE, NOT THE FIRST.  The lexicon
    marks a syllable stressed or unstressed and nothing between, and 1333 of
    its 5469 proper nouns - close to a quarter - are marked stressed more than
    once, so which of them carries the main stress is a real decision and
    getting it backwards would misplace the stress on a quarter of every name
    in the Bible.  It was measured rather than chosen, over the 57 such names
    the reader's own dictionary also holds: the last mark agrees 45 times, the
    first 7.  The five it counted as neither are Beersheba, Benoni,
    Elephantine, Halicarnassus and Nehemiah, and all five agree on which
    syllable is stressed and differ only in the vowels around it.  Alexander is
    the shape of it - marked stressed on al and on an, and said al-ex-AN-der.
    A word with no stressed syllable at all gets its main stress on the first,
    because the reader restresses a proper noun that arrives without one and
    would rather be told where.

    A syllable can be written with no vowel in it at all - Samson is s-ae-m
    then s-n - and it is said with the nasal itself standing where the vowel
    would be.  The reader writes that with a small raised schwa, which is how
    its own dictionary spells person and Jerusalem, so that is what goes in.
    Dropping such a syllable instead would leave the name a fragment, and
    dropping the whole word would send it back to being sounded out.
    """
    stressed = [i for i, (_, mark) in enumerate(syllables) if mark == "1"]
    main = stressed[-1] if stressed else 0
    out = []
    for i, (phones, mark) in enumerate(syllables):
        if i == main:
            stress = PRIMARY
        elif mark == "1":
            stress = SECONDARY
        else:
            stress = ""
        reduce = mark == "0" and i != main
        vowelless = all(phone not in VOWELS for phone in phones)
        said = False
        for at, phone in enumerate(phones):
            if phone in VOWELS:
                if not said:
                    out.append(stress)
                    said = True
                out.append(
                    UNSTRESSED[phone] if reduce and phone in UNSTRESSED else VOWELS[phone]
                )
            elif phone in CONSONANTS:
                if vowelless and at == len(phones) - 1:
                    out.append(stress)
                    out.append(SYLLABIC)
                    said = True
                out.append(CONSONANTS[phone])
            else:
                return None
        if not said:
            return None
    return "".join(out)


def lexicon_entries():
    """Every entry the given lexicon holds: its written word, its tag, its syllables."""
    text = LEXICON_PATH.read_text(encoding="utf-8")
    entries = []
    for word, tag, body in ENTRY.findall(text):
        syllables = [
            (phones.split(), mark) for phones, mark in SYLLABLE.findall(body)
        ]
        if syllables:
            entries.append((word, tag, syllables))
    return entries


def lexicon_named():
    """Every proper noun the given lexicon holds, said in the reader's notation."""
    named = {}
    for word, tag, syllables in lexicon_entries():
        if tag not in NAMED_TAGS:
            continue
        sounds = misaki_of(syllables)
        if sounds is not None:
            named[word] = sounds
    return named


def lexicon_parted():
    """The halves of the lexicon's joined names, for a Bible that writes them apart.

    The lexicon writes Kibroth-hattaavah and Kadesh_Barnea joined; this Bible
    writes them as two words, and each word is looked up on its own, so the
    joined entry answers neither of them.

    ★ A HALF IS WORKED OUT, NOT WRITTEN DOWN.  The lexicon says how the whole
    joined name is said and where its syllables fall.  It does not say where
    the join falls, so the cut is taken from whichever half has an entry of its
    own: Kadesh is two syllables by itself, so the first two syllables of
    Kadesh-barnea are Kadesh and what is left over is Barnea.  Nobody wrote
    down that Barnea is bˈɑɹniə.  So these fill a gap and must never displace
    an answer the reader already holds - which is where they are applied, in
    text_to_speech.g2p_ready, and is why they are kept apart from the entries
    that were actually written down.

    Every joined key is a name or an Aramaic phrase - 634 of the 637 are
    tagged as proper nouns and the other three are talitha-cumi, maran-atha
    and sabach-thani - so the homograph reason for keeping to proper nouns does not
    reach them, and the tag is not consulted.  Measured over the words this
    Bible actually says: 59 of the 147 it still sounds out are halves like
    these.
    """
    entries = lexicon_entries()
    counts = {}
    for word, _, syllables in entries:
        if "-" not in word and "_" not in word:
            counts.setdefault(word.lower(), len(syllables))
    parted = {}
    for word, _, syllables in entries:
        parts = [part for part in word.replace("_", "-").split("-") if part]
        if len(parts) != 2:
            continue
        head, tail = parts
        cut = counts.get(head.lower())
        if cut is None:
            behind = counts.get(tail.lower())
            cut = None if behind is None else len(syllables) - behind
        if cut is None or cut < 1 or cut >= len(syllables):
            continue
        for part, syls in ((head, syllables[:cut]), (tail, syllables[cut:])):
            sounds = misaki_of(syls)
            if sounds is not None:
                parted.setdefault(part.capitalize(), sounds)
    return parted


def pronunciations():
    """How this repo wants every word said, the hand-written answers winning.

    A name is filed under the spelling the Bible writes it with and under no
    other, so a name that is also an ordinary word leaves the ordinary word
    alone.  The reason that is enough is measured in text_to_speech.g2p_ready.
    """
    said = lexicon_named()
    said.update(json.loads(SAID_PATH.read_text(encoding="utf-8")))
    return said
