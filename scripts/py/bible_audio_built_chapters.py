"""The chapters of a recorded bible holding a word the reader now builds.

A guessed word that is a known word plus an ending is now said as that word
plus the ending (`said_built_fill`).  A piece holding one is said differently
from its recording, so this names those pieces, by chapter and number, which
are the only ones to record again.

★ IT COMPARES WHAT THE READER SAYS, BEFORE AND AFTER, NOT WHICH WORDS MATCH.
Each run is read twice - once with only the joined-name step it was recorded
with, once with the building step after it - and a piece is named only when
the sounds differ.  A word built to exactly what was guessed changes nothing
and names nothing.  The two readers are built apart, because building files
each word into the reader's dictionary for good.

★ A CHAPTER RECORDED AGAIN STILL COUNTS, because the before-reading is worked
out fresh each time; run it once, before recording, and hand the answer on.

Takes the path of a JSON file holding {"root": <folder of chapter folders>}.
Prints one JSON line.  It reads only.
"""

import json
import os
import sys

from text_to_speech import g2p_ready, pieces_of, said_run, said_run_joined, said_text


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    before = g2p_ready()
    after = g2p_ready()
    chapters = []
    words = {}
    for chapter in sorted(os.listdir(root)):
        folder = os.path.join(root, chapter)
        if not os.path.isdir(folder):
            continue
        names = [n for n in os.listdir(folder) if n.endswith(".txt") and n[:-4].isdigit()]
        changed = []
        for name in names:
            with open(os.path.join(folder, name), encoding="utf-8") as fh:
                text = fh.read()
            piece_changed = False
            for run in pieces_of(said_text(text)):
                was, _ = before(said_run_joined(before, run))
                filed = set(after.lexicon.golds)
                now, _ = after(said_run(after, run))
                for word in set(after.lexicon.golds) - filed:
                    words[word] = after.lexicon.golds[word]
                if was != now:
                    piece_changed = True
            if piece_changed:
                changed.append(int(name[:-4]))
        if changed:
            chapters.append({"chapter_code": chapter, "lines": sorted(changed)})
    print(
        json.dumps(
            {
                "chapters_count": len(chapters),
                "lines_count": sum(len(c["lines"]) for c in chapters),
                "words_count": len(words),
                "chapters": chapters,
                "words": dict(sorted(words.items())),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
