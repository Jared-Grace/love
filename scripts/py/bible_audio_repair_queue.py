"""The chapters whose recording needs doing again, found rather than remembered.

A chapter belongs here when both things are true of it: its sound was written
before the reading could sound out a name it does not know, and the reading as
it was then would have dropped a word of that chapter.  Either half alone names
the wrong set - the first alone takes in hundreds of chapters that happen to hold
no hard name, and the second alone cannot tell a chapter already done again from
one nobody has touched.

The set narrows itself as the work is done.  A chapter recorded again gets sound
newer than the door, so it fails the first test the next time this is asked and
is never offered twice.  That is also what makes the asking cheaper each night:
only the chapters still holding old sound are read at all.

Takes the path of a JSON file holding {"root": <folder of chapter folders>,
"before_second": <the second the door was made>}, and prints one JSON line
naming the queue.  It reads only; nothing is recorded or removed.
"""

import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from bible_audio_words_dropped import (  # noqa: E402
    chapter_texts,
    dropped_in,
    g2p_as_it_was,
)


def sound_before(folder, before_second):
    """Whether every numbered piece of this chapter was written before that second.

    Every piece is asked about rather than the newest one, because a chapter can
    hold a joined whole-chapter file written long after its pieces, and that file
    says nothing about which reading spoke them.  A folder holding no numbered
    piece at all is not a recorded chapter and is answered no.
    """
    pieces = 0
    for name in os.listdir(folder):
        if not name.endswith(".mp3"):
            continue
        stem = name[: -len(".mp3")]
        if not stem.isdigit():
            continue
        pieces += 1
        if os.path.getmtime(os.path.join(folder, name)) >= before_second:
            return False
    return pieces > 0


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    before_second = args["before_second"]

    names = sorted(
        n for n in os.listdir(root) if os.path.isdir(os.path.join(root, n))
    )
    old_sound = [n for n in names if sound_before(os.path.join(root, n), before_second)]

    g2p = g2p_as_it_was()
    queue = []
    words_dropped = 0
    for name in old_sound:
        texts = chapter_texts(os.path.join(root, name))
        if not texts:
            continue
        lost, _words = dropped_in(g2p, texts)
        if lost:
            queue.append(name)
            words_dropped += sum(lost.values())

    print(
        json.dumps(
            {
                "root": root,
                "before_second": before_second,
                "chapters_all": len(names),
                "chapters_sound_before_door": len(old_sound),
                "queue": queue,
                "words_dropped": words_dropped,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
