"""Checks every word holding an apostrophe for a dropped ending.

Why this is worth its own report.  The word list is written from Bible
text, which spells an apostrophe as the curly one, U+2019.  The
phonemiser was measured answering "isn't" with the sounds of "is" -
the whole negative gone, silently, with no error anywhere.  A learner
tapping that button hears the opposite of the word they tapped, in a
Bible.  A possessive loses no meaning by the same fault, but a negative
does, so every apostrophe word is checked rather than the ones that
happened to be noticed.

The test asks the same word twice, once with the curly apostrophe as the
text spells it and once with the straight one, and prints both answers
next to each other.  Where they differ, the spelling is the fault and the
fix is to ask with the other spelling.  Where they agree, something else
is dropping the ending.

Run it under the speech venv, handing it the word list:

    /home/j/a/user/venv_speech/bin/python \\
        ./scripts/py/word_sound_apostrophe_report.py <words_json>
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import g2p_ready  # noqa: E402

CURLY = "’"
STRAIGHT = "'"


def words_of(path):
    """The word list out of whatever shape the answer file holds."""
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    if isinstance(data, list):
        return data
    for key in ("words", "r", "list"):
        if isinstance(data.get(key), list):
            return data[key]
    raise SystemExit(f"no word list found in {path}: keys {list(data)[:10]}")


def main():
    if len(sys.argv) < 2:
        raise SystemExit("give the json file holding the word list")
    words = [w for w in words_of(sys.argv[1]) if CURLY in w or STRAIGHT in w]
    g2p = g2p_ready()
    print(f"apostrophe_words={len(words)}")
    differing = 0
    for word in words:
        curly = word.replace(STRAIGHT, CURLY)
        straight = word.replace(CURLY, STRAIGHT)
        said_curly, _ = g2p(curly)
        said_straight, _ = g2p(straight)
        stem, _ = g2p(word.split(CURLY)[0].split(STRAIGHT)[0])
        mark = ""
        if said_curly != said_straight:
            mark = "  <-- SPELLING CHANGES IT"
            differing += 1
        if said_curly == stem:
            mark += "  <-- ENDING DROPPED"
        print(f"{word}\tcurly={said_curly!r}\tstraight={said_straight!r}{mark}")
    print(f"differing={differing}")


if __name__ == "__main__":
    main()
