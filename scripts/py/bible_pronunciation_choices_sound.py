"""Speaks one Bible sentence twice for each name whose sounding is in question.

A name the dictionary now says differently from the way the recordings said it
is either a mend or a spoiling, and which one it is cannot be reasoned out: two
sayings of a name can both be defensible on paper and only one of them sound
right.  So the pair is put to the ear instead.  Each name gets the same sentence
spoken twice, once with the sounds the recording used and once with the sounds
the reading holds now, and the two files sit side by side under the same name.

★ THE SENTENCE IS A REAL VERSE AND THE WORD IS NOT LEFT STANDING ALONE.  A bare
word gets the prosody of a whole utterance - a falling end, a released final
consonant - and that is not the shape it is heard in on a recording, where it
sits in the middle of a line.  Two sayings compared as bare words can be told
apart by the wrong thing.  The verse is the same on both sides, so the sentence
around the name cancels and only the name is left to differ.

The sounds are written straight into the reader's dictionary between the two
sayings, which is what lets one process speak the same line both ways.  Nothing
is put back afterwards because nothing after this asks: the process speaks its
list and ends.
"""

import json
import sys

from text_to_speech import (
    COMPRESSION_LEVEL,
    SPEED,
    engine_ready,
    line_samples,
    said_text,
    write_mp3,
)


def choice_spoken(engine, folder, choice):
    """Writes the two mp3s for one name, and says where they went.

    The word is filed under the spelling the verse writes it with, which is the
    only spelling the reader looks the word up under.
    """
    g2p = engine["g2p"]
    word = choice["word"]
    sentence = said_text(choice["sentence"])
    written = {}
    for side in ("was", "now"):
        g2p.lexicon.golds[word] = choice[side]
        samples, rate = line_samples(g2p, engine["kokoro"], sentence, SPEED)
        path = folder + "/" + word + "_" + side + ".mp3"
        write_mp3(path, samples, rate, COMPRESSION_LEVEL)
        written[side] = path
    return written


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    folder = args["folder"]
    engine = engine_ready(args["threads"])
    written = {}
    for choice in args["choices"]:
        written[choice["word"]] = choice_spoken(engine, folder, choice)
    print(json.dumps({"folder": folder, "written": written}, ensure_ascii=False))


if __name__ == "__main__":
    main(sys.argv[1])
