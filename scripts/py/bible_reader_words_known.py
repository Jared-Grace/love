"""Which of these words the reader already had an answer for before any Bible name was filed.

The reader ships with a dictionary of its own, and the Bible names are filed on
top of it.  Two of the three sets of Bible names are filed only where the reader
had nothing - a derived reading of an ordinary word must not be forced on a
reader that already has one - and the third, the names somebody wrote down, is
filed over the top of whatever was there.

★ THIS ASKS WHETHER THAT THIRD SET IS OVERWRITING ANSWERS OR FILLING GAPS, WHICH
IS A DIFFERENT QUESTION FROM WHETHER ITS ANSWERS ARE GOOD.  Filling a gap can
only improve on a name sounded out letter by letter.  Overwriting is a claim that
the Bible lexicon knows a word better than the reader's own dictionary does, and
that claim is worth exactly as much as the entry behind it - measured, "Israel"
was already read the way the standard dictionary reads it and was overwritten
with a reading no dictionary records.

The reader is asked before anything is filed on top of it, which is the only
moment the question can be asked at all: afterwards every name is known, because
filing it is what made it known.
"""

import json
import sys

from text_to_speech import g2p_plain


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    words = args["words"]
    g2p = g2p_plain()
    golds = set(g2p.lexicon.golds)
    silvers = set(getattr(g2p.lexicon, "silvers", {}))
    known = golds | silvers
    answered = [w for w in words if w in known]
    unanswered = [w for w in words if w not in known]
    said = {}
    for word in answered:
        if word in g2p.lexicon.golds:
            said[word] = g2p.lexicon.golds[word]
        else:
            said[word] = g2p.lexicon.silvers[word]
    print(
        json.dumps(
            {
                "words_asked": len(words),
                "reader_golds": len(golds),
                "reader_silvers": len(silvers),
                "answered_already": answered,
                "no_answer": unanswered,
                "reader_says": said,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
