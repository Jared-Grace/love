"""Says how many of the app's words are phonemised in their sentence form.

The finding this exists to size.  Asked for a word on its own, the
phonemiser answers with the form that word takes *inside a sentence*.  For
most words those are the same thing.  For the small set English leans on -
the, a, of, to, and - they are not: inside a sentence those are unstressed
and their vowel collapses to a schwa, and that reduced form is what comes
back.  Played through a button whose only job is to teach a learner what
the word sounds like, a reduced form is heard as a mumble.

The test is mechanical rather than a matter of taste, which is why it can
be counted at all: a phonemisation carrying no stress mark anywhere in it
is a reduced form.  A word said on its own is always stressed somewhere.

Run it under the speech venv, handing it the file the word list was
written to:

    /home/j/a/user/venv_speech/bin/python \\
        ./scripts/py/word_sound_reduced_report.py <words_json>

Prints the count, then every word that came back unstressed, so the list
can be read rather than trusted.
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import g2p_ready  # noqa: E402

STRESS = "ˈˌ"


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
    words = words_of(sys.argv[1])
    g2p = g2p_ready()
    unstressed = []
    voiced_end = []
    for word in words:
        phonemes, _ = g2p(word)
        if not phonemes:
            continue
        if not any(mark in phonemes for mark in STRESS):
            unstressed.append((word, phonemes))
        if phonemes.endswith("ð"):
            voiced_end.append((word, phonemes))
    print(f"words={len(words)}")
    print(f"unstressed={len(unstressed)}")
    print(f"ending_voiced_th={len(voiced_end)}")
    print("--- unstressed")
    for word, phonemes in unstressed:
        print(f"  {word}\t{phonemes}")
    print("--- ending in a voiced th")
    for word, phonemes in voiced_end:
        print(f"  {word}\t{phonemes}")


if __name__ == "__main__":
    main()
