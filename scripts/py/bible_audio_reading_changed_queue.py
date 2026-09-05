"""The chapters whose recording says something the reading no longer says.

The queue beside this one asks whether the old reading left a word *silent*.
That is a special case of the real question, which is whether the old reading
said the chapter *differently* - and the special case is the smaller half.  A
name the old reading had never heard of came back with no sounds at all and was
caught; a name the old reading held a wrong answer for came back sounding wrong,
which is not silence, and was not caught.  Measured on Luke 3: its sound was
written the day before the door and it drops no word, so the silence test calls
it current, while "Pontius Pilate" is spoken with neither name right.

So each chapter recorded before the door is read twice - once by the reading of
that day, once by the reading of now - and the two are set side by side word by
word.  A word whose sounds differ is a word the recording gets wrong.

THERE HAVE BEEN THREE READINGS, NOT TWO, AND A CHAPTER IS COMPARED AGAINST THE
ONE THAT SPOKE IT.  The reading could not sound out an unknown name until the
first of September 2026 and had no written dictionary of names until the fourth,
so a chapter recorded between those days was spoken by a reading that drops
nothing and still says names wrongly.  Held against the oldest reading instead,
every one of those chapters is reported as dropping words it never dropped -
which is the wrong fault, in the wrong chapters, and would send the count out by
however many nights sat between the two doors.  A chapter whose pieces straddle
a door is counted as the later reading, since that is the reading most of it was
spoken by; there are few of those and a whole chapter is recorded in minutes.

The two halves are reported apart, because they cost different amounts.  The
chapters that dropped a word are already being recorded again night after night;
the chapters that merely say a name wrongly are the new work this measures, and
how much of it is worth doing is somebody's decision rather than this script's.

Takes the path of a JSON file holding {"root": <folder of chapter folders>,
"dictionary_second": <the second the dictionary door was made>, "fallback_second":
<the second the sounding-out door was made>}, optionally with "words_shown"
saying how many of the changed words to name and "chapters" naming the ones to
read rather than all of them.  Prints one JSON line.  It reads only; nothing is
recorded or removed.
"""

import collections
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from bible_audio_repair_queue import sound_before  # noqa: E402
from bible_audio_words_dropped import (  # noqa: E402
    UNKNOWN,
    chapter_texts,
    g2p_as_it_was,
    word_is,
)
from text_to_speech import g2p_plain, g2p_ready  # noqa: E402


def reading_of(readings, name):
    """One of the readings this repo has spoken with, built the first time it is asked for.

    Three of them are named here and a chapter is compared against whichever one
    was live on the day its sound was written.  They are built on demand because
    each holds a dictionary of its own, and a run over chapters that all fall on
    one side of a door should not pay for the other two.
    """
    if name not in readings:
        readings[name] = {
            "silent": g2p_as_it_was,
            "sounded_out": g2p_plain,
            "now": g2p_ready,
        }[name]()
    return readings[name]


def sounds_of(g2p, texts):
    """Each word of these pieces beside the sounds this reading gives it.

    The words come back too, rather than only the sounds, so that the two
    readings can be checked to be talking about the same words before their
    answers are compared at all.
    """
    said = []
    for text in texts:
        _phonemes, tokens = g2p(text)
        for t in tokens:
            word = (getattr(t, "text", "") or "").strip()
            if not word_is(word):
                continue
            said.append((word, getattr(t, "phonemes", None)))
    return said


def silent_is(phonemes):
    """Whether a reading of this word leaves it silent rather than saying it."""
    return phonemes is None or UNKNOWN in phonemes


def sounds_remember(said, word, was, now):
    """Keeps the first pair of soundings seen for a word, so the count can be read.

    A number saying a thousand words changed cannot be judged by anybody: it says
    nothing about whether the change is a name mended or a common word disturbed.
    The two soundings side by side can be judged on sight, and one pair per word
    is enough, because a word sounds the same wherever it is met.
    """
    if word not in said:
        said[word] = {"was": was, "now": now}


def chapter_changed(was, now, said):
    """What the old reading got wrong in one chapter, split by how it got it wrong.

    A word the old reading left silent is counted apart from a word it said with
    the wrong sounds, because the silent ones are already queued for doing again
    and the others are the new work.  Where the two readings do not even agree
    about which words are there the chapter is answered as unreadable rather than
    guessed at, since a comparison run out of step names every word after it.
    """
    if len(was) != len(now):
        return None
    dropped = collections.Counter()
    changed = collections.Counter()
    for (word_was, sounds_was), (word_now, sounds_now) in zip(was, now):
        if word_was != word_now:
            return None
        if sounds_was == sounds_now:
            continue
        if silent_is(sounds_was):
            dropped[word_was] += 1
        else:
            changed[word_was] += 1
            sounds_remember(said, word_was, sounds_was, sounds_now)
    return dropped, changed


def main(args_path):
    with open(args_path, encoding="utf-8") as fh:
        args = json.load(fh)
    root = args["root"]
    before_second = args["dictionary_second"]
    fallback_second = args["fallback_second"]
    words_shown = args.get("words_shown", 60)

    asked = args.get("chapters")
    all_names = sorted(
        n for n in os.listdir(root) if os.path.isdir(os.path.join(root, n))
    )
    names = [n for n in all_names if n in set(asked)] if asked else all_names
    old_sound = [n for n in names if sound_before(os.path.join(root, n), before_second)]

    readings = {}
    spoken_by = collections.Counter()

    queue_dropped = []
    queue_changed_only = []
    unreadable = []
    words_dropped = 0
    words_changed = 0
    changed_words = collections.Counter()
    said = {}
    for name in old_sound:
        folder = os.path.join(root, name)
        texts = chapter_texts(folder)
        if not texts:
            continue
        was = "silent" if sound_before(folder, fallback_second) else "sounded_out"
        spoken_by[was] += 1
        was_g2p = reading_of(readings, was)
        now_g2p = reading_of(readings, "now")
        split = chapter_changed(
            sounds_of(was_g2p, texts), sounds_of(now_g2p, texts), said
        )
        if split is None:
            unreadable.append(name)
            continue
        dropped, changed = split
        if dropped:
            queue_dropped.append(name)
            words_dropped += sum(dropped.values())
        elif changed:
            queue_changed_only.append(name)
        if changed:
            words_changed += sum(changed.values())
            changed_words.update(changed)

    print(
        json.dumps(
            {
                "root": root,
                "dictionary_second": before_second,
                "fallback_second": fallback_second,
                "chapters_all": len(all_names),
                "chapters_sound_before_door": len(old_sound),
                "chapters_by_reading_spoken": dict(spoken_by),
                "chapters_dropped_a_word": len(queue_dropped),
                "chapters_changed_only": len(queue_changed_only),
                "chapters_unreadable": unreadable,
                "words_dropped": words_dropped,
                "words_changed": words_changed,
                "words_changed_distinct": len(changed_words),
                "words_changed_most": {
                    word: dict(said[word], times=times)
                    for word, times in changed_words.most_common(words_shown)
                },
                "queue_changed_only": queue_changed_only,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main(sys.argv[1])
