"""Which words of a recorded chapter the reading cannot say, and so leaves silent.

A word outside the dictionary comes back from the letters-to-sound step one of
two ways - as the unknown glyph, or with no sounds at all - and both are silence
in the finished recording while the caption still shows the word.  So both are
counted here.  An earlier check tested only the glyph and missed the larger half.

The step is asked for by the reading's own builder rather than built again here,
because two copies of those settings would let this pass while the reading
dropped words.  The text is handed over whole, as the reading hands it over,
since the step uses the words either side to decide - a name that looks lost on
its own is often fine in its sentence.

Takes the path of a JSON file holding {"root": <folder of chapter folders>},
optionally with "chapters" naming the ones to read rather than all of them, and
prints one JSON line: the chapters holding a dropped word, what was dropped, and
the totals.  It reads only; nothing is recorded or removed.  The caller spells
the root because the layout is named on the JavaScript side, where a move is one
edit.
"""

import collections
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from text_to_speech import g2p_ready  # noqa: E402

UNKNOWN = "❓"


def word_is(text):
    """Whether a token is a word, rather than punctuation that rightly has no sound."""
    for ch in text:
        if ch.isalpha():
            return True
    return False


def chapter_texts(folder):
    """Every recorded piece of one chapter, in the order the pieces are read."""
    names = [f for f in os.listdir(folder) if f.endswith(".txt")]

    def piece_number(name):
        stem = name[: -len(".txt")]
        return int(stem) if stem.isdigit() else -1

    named = [n for n in names if piece_number(n) >= 0]
    named.sort(key=piece_number)
    out = []
    for n in named:
        with open(os.path.join(folder, n), encoding="utf-8") as fh:
            text = fh.read().strip()
        if text:
            out.append(text)
    return out


def dropped_in(g2p, texts):
    """The words these pieces hold that the reading would leave silent."""
    lost = collections.Counter()
    words = 0
    for text in texts:
        _phonemes, tokens = g2p(text)
        for t in tokens:
            word = (getattr(t, "text", "") or "").strip()
            if not word_is(word):
                continue
            words += 1
            phonemes = getattr(t, "phonemes", None)
            if phonemes is None or UNKNOWN in phonemes:
                lost[word] += 1
    return lost, words


def chapter_names(root, asked):
    """The chapter folders to read - the ones named, or every one there is."""
    if asked:
        return list(asked)
    return sorted(
        n for n in os.listdir(root) if os.path.isdir(os.path.join(root, n))
    )


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    names = chapter_names(root, args.get("chapters"))

    g2p = g2p_ready()

    chapters = {}
    words_total = 0
    dropped_total = 0
    read = 0
    for name in names:
        texts = chapter_texts(os.path.join(root, name))
        if not texts:
            continue
        read += 1
        lost, words = dropped_in(g2p, texts)
        words_total += words
        if lost:
            dropped_total += sum(lost.values())
            chapters[name] = dict(lost.most_common())

    report = {
        "root": root,
        "chapters_read": read,
        "chapters_with_dropped_words": len(chapters),
        "words_read": words_total,
        "words_dropped": dropped_total,
        "chapters": chapters,
    }
    print(json.dumps(report, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
