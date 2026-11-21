"""The sounds the reader would say for each word, said on its own.

Asks the same engine the word recordings are made with, set up the same way:
the Bible lexicon and the hand-written sayings filed on top, then the
said-alone fix a lone word gets.  So the answer is what a recording made now
would say, written in sound symbols, without making a recording.

Each word is asked exactly as spelled, so "cush" and "Cush" can be asked side
by side to see whether the small letters change what is said.

Run it under the speech python with one argument, a file holding
{"words": [...], "voice": "..."}.  It prints one line: each word with its sound.
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from text_to_speech import g2p_ready, said_alone_phonemes, said_text  # noqa: E402


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    voice = args["voice"]
    g2p = g2p_ready()
    report = {}
    for word in args["words"]:
        run = said_text(word)
        phonemes, _ = g2p(run)
        report[word] = said_alone_phonemes(run, phonemes, voice)
    print(json.dumps(report, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
