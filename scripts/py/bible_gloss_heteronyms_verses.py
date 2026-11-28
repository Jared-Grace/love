"""Which saying each verse uses, for every word a button says two ways.

A word button plays one recording per word, chosen as the saying the bible
uses most (bible_audio_heteronyms_said.py).  That is right for most verses
and wrong for every verse using the other meaning: measured 2026-11-27,
"lives" said "livz" is wrong in the 71 verses about a person's life.

★ THE READER ALREADY KNOWS THE ANSWER FOR EACH VERSE; THIS ONLY WRITES IT
DOWN.  It says every verse holding such a word in its own sentence and keeps,
for the verses whose saying differs from the button's, which saying it used.
A phone cannot run the reader, so the choice travels as data.

★ A VERSE IS THE UNIT, NOT A PASSAGE.  Passages are cut differently by each
language's store; a verse number is the same in all of them.  One word said
two ways inside one verse keeps the first saying - measured too rare to pay
for counting occurrences on the phone.

★ A SECOND SAYING IS NAMED word-N, N COUNTED OVER ITS SAYINGS IN SORTED
ORDER, so re-running over the same bible names the same files.  A hyphen
survives the recording's file name; nothing English is spelled word-digit.

Takes the path of a JSON file holding {"folder": <chapter JSON files, each
{passages: [{texts: [[verse, ...], ...], verse_numbers: [...]}]}>}.
Prints one JSON line: {"alternates": {key: phonemes},
"places": {key: ["JHN01:4", ...]}}.  It reads only.
"""

import json
import os
import re
import sys
from collections import Counter

from text_to_speech import (
    STRESS_MARKS,
    g2p_ready,
    pieces_of,
    said_alone_bible,
    said_run,
    said_text,
)


def unstressed(phonemes):
    return "".join(c for c in phonemes if c not in STRESS_MARKS)


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    folder = args["folder"]
    plain = said_alone_bible()
    targets = {w for w in plain if "-" not in w}
    holds = re.compile(r"\b(?:" + "|".join(sorted(map(re.escape, targets))) + r")\b", re.I)
    g2p = g2p_ready()
    found = []
    sayings = {}
    for name in sorted(os.listdir(folder)):
        if not name.endswith(".json"):
            continue
        with open(os.path.join(folder, name), encoding="utf-8") as fh:
            chapter = json.load(fh)
        code = chapter["chapter_code"]
        for passage in chapter["passages"]:
            lines = passage["texts"][0]
            for verse, line in zip(passage["verse_numbers"], lines):
                if not holds.search(line):
                    continue
                seen = set()
                for run in pieces_of(said_text(line)):
                    if not holds.search(run):
                        continue
                    _, tokens = g2p(said_run(g2p, run))
                    for token in tokens:
                        word = (token.text or "").lower()
                        if word not in targets or word in seen or not token.phonemes:
                            continue
                        seen.add(word)
                        sound = unstressed(token.phonemes)
                        if sound == unstressed(plain[word]):
                            continue
                        sayings.setdefault((word, sound), Counter())[token.phonemes] += 1
                        found.append((code, verse, word, sound))
    keys = {}
    alternates = {}
    by_word = {}
    for word, sound in sayings:
        by_word.setdefault(word, []).append(sound)
    for word, sounds in by_word.items():
        for i, sound in enumerate(sorted(sounds)):
            key = f"{word}-{i + 2}"
            keys[(word, sound)] = key
            said = sayings[(word, sound)]
            alternates[key] = said.most_common(1)[0][0]
    places = {}
    for code, verse, word, sound in found:
        places.setdefault(keys[(word, sound)], []).append(f"{code}:{verse}")
    places = {key: sorted(places[key]) for key in sorted(places)}
    alternates = {key: alternates[key] for key in sorted(alternates)}
    print(json.dumps({"alternates": alternates, "places": places}, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
