"""Every word a recorded bible's pieces were read with that the reading had to guess.

The word list beside this one asks each word on its own, and a word on its own
is not how a recording met it.  A joined place name is taken apart into its
pieces when the words are listed, so "lahai" and "roi" look like guesses even
where the reading meets "Beer-lahai-roi" whole and has it written down.  Asked
inside the very line the voice was handed, a word is judged the way the
recording judged it.

★ IT READS THE TEXT EACH PIECE WAS SPOKEN FROM, NOT THE TRANSLATION'S TEXT.
Each piece's .txt beside its sound is what the voice was handed, so this
cannot disagree with the recording about which words were in it.  The line is
put through the same two steps the reading uses - straightened, then cut into
runs, with its joined names read part by part - before the letters-to-sound step, because a run is the unit the reader
sees and a word can read differently at the edge of one.

Every guessed word is named with how often it was guessed and the first piece
it was guessed in, so a person can go and hear it.

Takes the path of a JSON file holding {"root": <folder of chapter folders>}.
Prints one JSON line.  It reads only.
"""

import json
import os
import sys

from text_to_speech import g2p_ready, pieces_of, said_run, said_text

GUESS_RATING_MAX = 2


def rating_of(tk):
    # The reader files the rating of a word it answered whole on the token
    # itself, and only the rating of a word it took apart under "_".
    rating = getattr(tk, "rating", None)
    if rating is None:
        rating = tk._.rating
    return rating


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    g2p = g2p_ready()
    counts = {}
    first = {}
    says = {}
    pieces = 0
    for chapter in sorted(os.listdir(root)):
        folder = os.path.join(root, chapter)
        if not os.path.isdir(folder):
            continue
        names = [n for n in os.listdir(folder) if n.endswith(".txt") and n[:-4].isdigit()]
        for name in sorted(names, key=lambda n: int(n[:-4])):
            with open(os.path.join(folder, name), encoding="utf-8") as fh:
                text = fh.read()
            pieces += 1
            for run in pieces_of(said_text(text)):
                _, tokens = g2p(said_run(g2p, run))
                for tk in tokens:
                    rating = rating_of(tk)
                    if rating is not None and rating > GUESS_RATING_MAX:
                        continue
                    if not any(c.isalpha() for c in tk.text):
                        continue
                    word = tk.text
                    counts[word] = counts.get(word, 0) + 1
                    if word not in first:
                        first[word] = chapter + "/" + name[:-4]
                        says[word] = tk.phonemes or ""
    words = sorted(counts, key=lambda w: (-counts[w], w))
    print(
        json.dumps(
            {
                "pieces_read": pieces,
                "words_guessed": len(words),
                "times_guessed": sum(counts.values()),
                "guessed": [
                    {"word": w, "times": counts[w], "first": first[w], "says": says[w]}
                    for w in words
                ],
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
