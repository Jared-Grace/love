"""The chapters of a recorded bible holding a joined name the reader now reads part by part.

A joined name such as "Kiriath-jearim" was guessed whole when the chapters were
recorded.  The reader now hands each of its parts over separately when every
part is written down, so a piece holding one says it differently from its
recording.  This names the chapters with such a piece, which are the ones to
record again.  Each chapter names its pieces by number, so only those need
speaking: the rest of the chapter reads exactly as it did.

★ IT ASKS THE READER'S OWN STEP, NOT A COPY OF ITS RULE.  A run is changed
exactly when `said_run` hands the reader something other than the run, so this
cannot disagree with the recorder about which pieces moved.

★ A CHAPTER RECORDED AGAIN STILL COUNTS, because the line beside its sound keeps
the hyphen on purpose.  Run it once, before recording, and hand the answer on.

Takes the path of a JSON file holding {"root": <folder of chapter folders>}.
Prints one JSON line.  It reads only.
"""

import json
import os
import sys

from text_to_speech import JOINED_WORD, g2p_ready, pieces_of, said_run, said_text


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    g2p = g2p_ready()
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
                said = said_run(g2p, run)
                if said == run:
                    continue
                piece_changed = True
                for match in JOINED_WORD.finditer(run):
                    word = match.group(0)
                    if word not in said:
                        words[word] = words.get(word, 0) + 1
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
                "words": dict(sorted(words.items(), key=lambda kv: -kv[1])),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
