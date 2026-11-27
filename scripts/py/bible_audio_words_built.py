"""Each guessed word set beside the sound built from a known word inside it.

A word the reader has no entry for is sounded out from its spelling.  Most such
words are a known word plus an ending - "prophesied" is "prophesy" and a "d",
"Anakites" is "Anak" and "ites", "facedown" is "face" and "down" - so the sound
can be built from the known word instead of guessed.  Where the built sound and
the guessed one differ, the guess is the one to doubt: the known word was
looked up, and the ending follows a fixed rule.

★ IT ONLY EVER BUILDS FROM WORDS THE READER ITSELF ANSWERS.  A piece counts as
known exactly when `guessed_is` says it was not sounded out, so this cannot
call a word known that the reader would have guessed.

★ A WORD IS COMPARED WITHOUT ITS STRESS MARKS, and with the reader's flap and
weak-vowel letters taken as their plain ones, because joining two looked-up
words moves stress and softens a "t" without changing what a listener hears
as the word.  Only a difference that survives that is reported.

Takes the path of a JSON file holding {"guessed": [{"word", "times", "first",
"says"}]}, the list `bible_audio_words_guessed` answers.  Prints one JSON line.
It reads only.
"""

import json
import sys

from text_to_speech import g2p_ready, guessed_is

SIBILANTS = "szʃʒʧʤ"
VOWELS_LOOSE = "ɑæɐʌɛɜɚɔɒəiuʊoeaAIOWY"
VOICELESS = "ptkfθ"
LOOSE = {"T": "t", "ᵻ": "ə", "ᵊ": "ə", "ɪ": "ə", "ˈ": "", "ˌ": ""}


def loose(phonemes):
    """A sound with what a listener does not hear as the word taken out.

    Stress moves when two words join, and the unstressed vowels the reader
    writes three ways all sound like "uh" or "ih" in passing; a consonant
    written twice where two words meet is said once.
    """
    plain = "".join(LOOSE.get(c, c) for c in phonemes)
    said = []
    for c in plain:
        if said and said[-1] == c and c not in VOWELS_LOOSE:
            continue
        said.append(c)
    return "".join(said)


def known(g2p, word):
    """The reader's sound for a word it looks up, or None when it would guess."""
    if len(word) < 2 or guessed_is(g2p, word):
        return None
    phonemes, _ = g2p(word)
    return phonemes.strip() or None


def known_any(g2p, word):
    for spelling in dict.fromkeys([word, word.lower(), word[:1].upper() + word[1:].lower()]):
        said = known(g2p, spelling)
        if said:
            return spelling, said
    return None


def s_ending(base):
    last = loose(base)[-1:]
    if last in SIBILANTS:
        return "ɪz"
    if last in VOICELESS:
        return "s"
    return "z"


def ed_ending(base):
    last = loose(base)[-1:]
    if last in "td":
        return "ɪd"
    if last in VOICELESS + "sʃʧ":
        return "t"
    return "d"


def builds(g2p, word):
    """Every (known word, built sound) this word can be made from."""
    found = []

    def add(stem, ending_of, how):
        hit = known_any(g2p, stem)
        if hit:
            spelling, said = hit
            found.append({"from": spelling, "how": how, "built": said + ending_of(said)})

    lower = word.lower()
    if lower.endswith("'s"):
        add(word[:-2], s_ending, "'s")
    elif lower.endswith("s'"):
        add(word[:-1], lambda b: "", "s'")
    if lower.endswith("ied"):
        add(word[:-3] + "y", lambda b: "d", "y+ed")
    elif lower.endswith("ed"):
        add(word[:-2], ed_ending, "ed")
        add(word[:-1], ed_ending, "e+d")
    if lower.endswith("ites"):
        add(word[:-4], lambda b: "Its", "ites")
    elif lower.endswith("ite"):
        add(word[:-3], lambda b: "It", "ite")
    if lower.endswith("est"):
        add(word[:-3], lambda b: "ɪst", "est")
        add(word[:-2], lambda b: "ɪst", "e+st")
    if lower.endswith("er") and not lower.endswith("ier"):
        add(word[:-2], lambda b: "əɹ", "er")
        add(word[:-1], lambda b: "əɹ", "e+r")
    if lower.endswith("ness"):
        add(word[:-4], lambda b: "nəs", "ness")
    if lower.endswith("s") and not lower.endswith("'s") and not lower.endswith("ss"):
        add(word[:-1], s_ending, "s")
    # A name is not two English words run together, so "Kittites" is never
    # "Kit" and "tites"; and a word an ending already explains is not split.
    if "'" not in word and word == lower and not found:
        for cut in range(2, len(word) - 1):
            first = known_any(g2p, word[:cut])
            if not first or len(word[:cut]) < 3:
                continue
            second = known_any(g2p, word[cut:].lower())
            if not second or len(word) - cut < 3:
                continue
            found.append({
                "from": first[0] + "+" + second[0],
                "how": "joined",
                "built": first[1] + second[1],
            })
    # A built sound repeated by two routes is one answer.
    unique = {}
    for b in found:
        unique.setdefault(loose(b["built"]), b)
    return list(unique.values())


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    g2p = g2p_ready()
    agrees = []
    differs = []
    unbuilt = []
    for g in args["guessed"]:
        word = g["word"]
        made = builds(g2p, word)
        if not made:
            unbuilt.append(g)
            continue
        says = loose(g["says"])
        if any(loose(b["built"]) == says for b in made):
            agrees.append(word)
            continue
        differs.append(dict(g, builds=made))
    print(
        json.dumps(
            {
                "agrees_count": len(agrees),
                "differs_count": len(differs),
                "differs_times": sum(g["times"] for g in differs),
                "unbuilt_count": len(unbuilt),
                "unbuilt_times": sum(g["times"] for g in unbuilt),
                "differs": differs,
                "unbuilt": unbuilt,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
