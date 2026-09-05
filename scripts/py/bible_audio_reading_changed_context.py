"""Every changed occurrence of a named word, with what stands beside it and which step moved.

The queue that counts changed words keeps one pair of soundings per word, on the
stated ground that a word sounds the same wherever it is met.  That holds for a
name and fails for the small words of the language: "the" is said one way before
a consonant and another before a vowel, so a single remembered pair reports the
first occurrence and the count reports all of them, and the two cannot be read
together.  Two hundred and eight changed "the"s could be two hundred and eight
faults or a rule firing correctly, and the report cannot tell them apart.

★ THE READING IS TWO STEPS AND THIS SAYS WHICH ONE MOVED, WHICH IS THE WHOLE
POINT.  Both steps are older in every chapter measured, so nothing in that
measurement separates them.  Here each piece is asked whether the two text steps
hand the voice the same letters at all: where they do, the sound step is the only
thing left that can have changed the word, and where they do not, the word may
simply be standing next to a word that was cut short at a curly apostrophe and is
now whole.  A small word that changed only in pieces the apostrophe touched has
not been misread at all - it has been read correctly beside a neighbour that was
finally spelled correctly.

★ WHAT STANDS AFTER THE WORD IS REPORTED BECAUSE THAT IS WHAT DECIDES IT.  The
rule for "the" reads the next word's first sound, not the word itself, so an
answer that names only the word can never say whether the rule fired rightly.
The word before is carried too, at no cost, because a stress reduction reads off
the phrase rather than the neighbour.

Takes the path of a JSON file holding {"root", "fallback_second",
"dictionary_second", "apostrophe_second", "words": the words to follow},
optionally with "chapters" naming the ones to read rather than all of them.
Prints one JSON line.  It reads only; nothing is recorded or removed.
"""

import collections
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from bible_audio_reading_changed_queue import (  # noqa: E402
    silent_is,
    sound_step_of,
    sounds_of,
    steps_spoken_by,
)
from bible_audio_repair_queue import sound_before  # noqa: E402
from bible_audio_words_dropped import chapter_texts  # noqa: E402
from text_to_speech import (  # noqa: E402
    said_text,
    said_text_dashes_opened,
)

EXAMPLES_KEPT = 6


def occurrence_add(seen, word, was, now, before, after, text_moved):
    """Files one changed occurrence under the word, keeping a few to read.

    The counts are what the answer turns on and are kept for every occurrence;
    the examples are for a person to sanity-check the counts against, so a
    handful of each kind is enough and more would only be longer.
    """
    row = seen[word]
    row["times"] += 1
    row["text_moved" if text_moved else "sound_only"] += 1
    beside = "vowel" if after[:1].lower() in "aeiou" else "other"
    row["after_" + beside] += 1
    row["soundings"][was + " > " + now] += 1
    row["soundings_beside"][was + " > " + now + " before " + beside] += 1
    if len(row["examples"]) < EXAMPLES_KEPT:
        row["examples"].append(
            {
                "before": before,
                "after": after,
                "was": was,
                "now": now,
                "text_moved": text_moved,
            }
        )


def piece_walk(seen, wanted, text, was, now):
    """Walks one piece's two readings side by side, filing every wanted word that moved.

    A piece whose two readings disagree about how many words there are cannot be
    walked at all, and is left alone rather than guessed at - the same rule the
    counting queue holds to, for the same reason.
    """
    phonemes_was, words_was = was
    phonemes_now, words_now = now
    if phonemes_was == phonemes_now:
        return 0
    if len(words_was) != len(words_now):
        return 1
    text_moved = said_text(text) != said_text_dashes_opened(text)
    for at, ((word_was, sounds_was), (word_now, sounds_now)) in enumerate(
        zip(words_was, words_now)
    ):
        if word_was != word_now or sounds_was == sounds_now:
            continue
        if word_was not in wanted or silent_is(sounds_was):
            continue
        before = words_was[at - 1][0] if at else ""
        after = words_was[at + 1][0] if at + 1 < len(words_was) else ""
        occurrence_add(seen, word_was, sounds_was, sounds_now, before, after, text_moved)
    return 0


def word_row_new():
    """The empty tally kept for one followed word."""
    return {
        "times": 0,
        "sound_only": 0,
        "text_moved": 0,
        "after_vowel": 0,
        "after_other": 0,
        "soundings": collections.Counter(),
        "soundings_beside": collections.Counter(),
        "examples": [],
    }


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    doors = (
        args["fallback_second"],
        args["dictionary_second"],
        args["apostrophe_second"],
    )
    newest_door = max(doors)
    wanted = set(args["words"])

    asked = args.get("chapters")
    all_names = sorted(
        n for n in os.listdir(root) if os.path.isdir(os.path.join(root, n))
    )
    names = [n for n in all_names if n in set(asked)] if asked else all_names
    old_sound = [n for n in names if sound_before(os.path.join(root, n), newest_door)]

    built = {}
    seen = collections.defaultdict(word_row_new)
    unlined = 0
    for name in old_sound:
        folder = os.path.join(root, name)
        texts = chapter_texts(folder)
        if not texts:
            continue
        marks, sound = steps_spoken_by(folder, doors)
        text_step = said_text_dashes_opened if marks == "curly" else said_text
        was = sounds_of(sound_step_of(built, sound), text_step, texts)
        now = sounds_of(sound_step_of(built, "dictionary"), said_text, texts)
        for text, was_piece, now_piece in zip(texts, was, now):
            unlined += piece_walk(seen, wanted, text, was_piece, now_piece)

    print(
        json.dumps(
            {
                "chapters_read": len(old_sound),
                "pieces_unlined": unlined,
                "words": {
                    word: dict(
                        row,
                        soundings=dict(row["soundings"].most_common()),
                        soundings_beside=dict(row["soundings_beside"].most_common()),
                    )
                    for word, row in sorted(seen.items())
                },
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
