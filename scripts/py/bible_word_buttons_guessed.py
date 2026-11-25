"""Which word-button recordings were guessed, and which a capital letter would mend.

A button's recording is spoken from the word in small letters, because the
word list it is made from is lowercased.  The Bible name list is filed under
the capitalised spelling only, so a name spoken in small letters misses it and
is sounded out from its spelling - while the same name in a chapter, written
with its capital, is answered.  This asks each button word both ways.

Three lists come back:

- guessed: the word in small letters gets no answer.  Each says whether the
  spelling with a capital first letter has one (`capital_known`), which is the
  set a change to speak names capitalised would mend.  `said_alone` is the
  spelling the word recorder now reads the word from, so a word whose
  `said_alone` differs from it is one the recorder mends - joined names among
  them, read part by part.
- shared: the word in small letters IS answered, the capitalised spelling is
  answered too, the two answers sound different, and the bible writes the
  capitalised spelling somewhere.  Those are the pairs like Job and job, where
  one file named in small letters cannot hold both, so a person has to choose.
  A capital at the start of a sentence puts ordinary words in "written", but an
  ordinary word sounds the same with a capital, so it drops out on the sound.

Takes the path of a JSON file holding {"words": [...], "written": [...]}.
Prints one JSON line.  It reads only.
"""

import json
import sys

from text_to_speech import g2p_ready, said_alone_spelling

GUESS_RATING_MAX = 2


def rating_of(tk):
    # A word answered whole carries its rating on the token itself; only a
    # word the reader took apart carries it under "_".
    rating = getattr(tk, "rating", None)
    if rating is None:
        rating = tk._.rating
    return rating


def asked(g2p, word):
    phonemes, tokens = g2p(word)
    guessed = any(
        (rating_of(tk) is None or rating_of(tk) <= GUESS_RATING_MAX)
        and any(c.isalpha() for c in tk.text)
        for tk in tokens
    )
    return phonemes, guessed


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    words = args["words"]
    written = set(args["written"])
    g2p = g2p_ready()
    guessed = []
    shared = []
    for word in words:
        capital = word[:1].upper() + word[1:]
        low_says, low_guessed = asked(g2p, word)
        if capital == word:
            if low_guessed:
                guessed.append({"word": word, "says": low_says, "capital_known": False})
            continue
        cap_says, cap_guessed = asked(g2p, capital)
        if low_guessed:
            guessed.append(
                {
                    "word": word,
                    "says": low_says,
                    "capital_known": not cap_guessed,
                    "capital_says": cap_says,
                    "said_alone": said_alone_spelling(g2p, word),
                }
            )
        elif not cap_guessed and cap_says != low_says and capital in written:
            shared.append({"word": word, "says": low_says, "capital_says": cap_says})
    mended = [g for g in guessed if g["capital_known"]]
    print(
        json.dumps(
            {
                "words_asked": len(words),
                "guessed_count": len(guessed),
                "capital_mends_count": len(mended),
                "shared_count": len(shared),
                "guessed": guessed,
                "shared": shared,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
