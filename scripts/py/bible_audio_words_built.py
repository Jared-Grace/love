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

from text_to_speech import builds_ending, g2p_ready, known_any, loose


def builds(g2p, word):
    """Every (known word, built sound) this word can be made from: the reader's
    own ending rule, then two known words run together where no ending fits."""
    found = builds_ending(g2p, word)
    # A name is not two English words run together, so "Kittites" is never
    # "Kit" and "tites"; and a word an ending already explains is not split.
    if "'" not in word and word == word.lower() and not found:
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
