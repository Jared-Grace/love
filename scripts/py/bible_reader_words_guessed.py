"""Which of these words the reading has no answer for and sounds out from the spelling.

The reading answers a word from one of three places: its own dictionary, the
Bible names filed on top of it, or the hand list.  A word in none of them goes
to the fallback, which sounds it out letter by letter - and that is the only
place a word can come out wrong without anybody having written the wrong answer
down.  So this is the list of words nobody has decided the sound of.

★ IT ASKS THE SAME OBJECT THE READING SPEAKS WITH, NOT A COPY OF ITS
DICTIONARY.  A word with a known stem - "teemed" from "teem" - is answered by
the reader's own suffix rules and is not a guess, and only the reader knows
which endings it can take apart.  So each word is put through the reading and
the rating the reading gives it is what decides.

Each word is asked on its own, so a word the reading treats differently inside
a sentence is judged by how it reads alone.  Takes the path of a JSON file
holding {"words": [...]}.  Prints one JSON line.  It reads only.
"""

import json
import sys

from text_to_speech import g2p_ready

GUESS_RATING_MAX = 2


def guessed(g2p, word):
    _, tokens = g2p(word)
    sounds = []
    for tk in tokens:
        rating = tk._.rating
        if rating is None or rating <= GUESS_RATING_MAX:
            sounds.append(tk.phonemes or "")
    return " ".join(sounds) if sounds else None


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    words = args["words"]
    g2p = g2p_ready()
    said = {}
    for word in words:
        sounds = guessed(g2p, word)
        if sounds is not None:
            said[word] = sounds
    print(
        json.dumps(
            {
                "words_asked": len(words),
                "words_guessed": len(said),
                "guessed_says": said,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
