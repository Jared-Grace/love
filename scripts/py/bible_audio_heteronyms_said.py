"""How a recorded bible says each word that has two sayings, counted.

Some words are spelled one way and said two: "sow" is "soh" when you plant
and rhymes with "cow" when it is a pig.  The reader's dictionary keeps both
and picks one by guessing what part of speech the word is.  Inside a verse it
has the sentence to guess from; on a button the word stands alone, so the
guess is close to a coin toss - measured 2026-11-27, the button for "sow"
said "soh" and the button for "sows" said the pig.

★ THE BIBLE ITSELF IS THE ANSWER, SO NOBODY HAS TO PICK.  This reads every
piece holding one of those words, lets the reader say it in its own sentence,
and counts which saying it used.  The one used most is how this bible means
the word, and that is what a learner tapping it alone should hear.

★ ONLY WORDS WHOSE SAYINGS DIFFER IN SOUND ARE COUNTED.  RE-cord against
re-CORD is the same sounds with the weight moved, and either is understood;
those are left to the reader.

Takes the path of a JSON file holding {"root": <folder of chapter folders>}.
Prints one JSON line: {"words": {word: {"said", "counts"}}}.  It reads only.
"""

import json
import os
import re
import sys
from collections import Counter

from text_to_speech import STRESS_MARKS, g2p_ready, pieces_of, said_run, said_text


def unstressed(phonemes):
    return "".join(c for c in phonemes if c not in STRESS_MARKS)


def heteronyms(g2p):
    """Every word the reader's dictionary says two ways that sound different."""
    found = set()
    for word, entry in g2p.lexicon.golds.items():
        if not isinstance(entry, dict):
            continue
        sounds = {unstressed(v) for v in entry.values() if v}
        if len(sounds) > 1:
            found.add(word.lower())
    return found


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    g2p = g2p_ready()
    targets = heteronyms(g2p)
    holds = re.compile(r"\b(?:" + "|".join(sorted(map(re.escape, targets))) + r")\b", re.I)
    counts = {}
    for chapter in sorted(os.listdir(root)):
        folder = os.path.join(root, chapter)
        if not os.path.isdir(folder):
            continue
        for name in os.listdir(folder):
            if not (name.endswith(".txt") and name[:-4].isdigit()):
                continue
            with open(os.path.join(folder, name), encoding="utf-8") as fh:
                text = fh.read()
            if not holds.search(text):
                continue
            for run in pieces_of(said_text(text)):
                if not holds.search(run):
                    continue
                _, tokens = g2p(said_run(g2p, run))
                for token in tokens:
                    word = (token.text or "").lower()
                    if word in targets and token.phonemes:
                        counts.setdefault(word, Counter())[token.phonemes] += 1
    words = {}
    for word, said in sorted(counts.items()):
        by_sound = Counter()
        for phonemes, n in said.items():
            by_sound[unstressed(phonemes)] += n
        sound, _ = by_sound.most_common(1)[0]
        best = max((p for p in said if unstressed(p) == sound), key=lambda p: said[p])
        words[word] = {"said": best, "counts": dict(said.most_common())}
    print(json.dumps({"words": words}, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
