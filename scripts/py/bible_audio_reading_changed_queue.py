"""The chapters whose recording says something the reading no longer says.

The queue beside this one asks whether the old reading left a word *silent*.
That is a special case of the real question, which is whether the old reading
said the chapter *differently* - and the special case is the smaller half.  A
name the old reading had never heard of came back with no sounds at all and was
caught; a name it held a wrong answer for came back sounding wrong, which is not
silence, and was not caught; and a word cut short at a curly apostrophe came back
as a shorter real word, which is not silence either.  Measured on Luke 3: it
drops no word, so the silence test calls its sound current, while "Pontius
Pilate" is spoken with neither name right.

So each chapter recorded before the door is read twice - once as the reading was
on the day its sound was written, once as the reading is now - and the two are
set side by side.  Whatever differs is something the recording gets wrong.

THE READING IS TWO STEPS, NOT ONE, AND EACH HAS MOVED ON ITS OWN DAY.  The text
step turns a line into the letters the voice is given; the sound step turns those
letters into sounds.  Three doors sit between them: the sound step could not
sound out an unknown name until the first of September 2026 and had no written
dictionary of names until the fourth, and the text step did not straighten the
Bible's curly apostrophe until the fifth.  A chapter is therefore compared
against whichever pair of steps was live on its own day, rather than against the
oldest of everything - held against the oldest sound step, chapters recorded
after the first would be reported as dropping words they never dropped, which is
the wrong fault in the wrong chapters.  A chapter whose pieces straddle a door is
counted as the later step, since that is what most of it was spoken by; there are
few of those and a whole chapter is recorded in minutes.

THE CHAPTER IS JUDGED ON WHOLE PIECES AND ONLY ILLUSTRATED WORD BY WORD.  The
curly apostrophe changes how many tokens a line has, so the two readings cannot
be relied on to walk in step, and a word-by-word walk that falls out of step
reports every word after it.  The sounds of a whole piece can always be compared,
whatever happened to the tokens inside it, so that is what decides.  The words
are lined up as well where the two agree about how many there are, and where they
do not the piece is counted as unlined rather than guessed at.

The halves are reported apart, because they cost different amounts.  The chapters
that dropped a word are already being recorded again night after night; the rest
are the new work this measures, and how much of it is worth doing is somebody's
decision rather than this script's.

Takes the path of a JSON file holding {"root": <folder of chapter folders>,
"apostrophe_second", "dictionary_second" and "fallback_second": the seconds the
three doors were made}, optionally with "words_shown" saying how many of the
changed words to name and "chapters" naming the ones to read rather than all of
them.  Prints one JSON line.  It reads only; nothing is recorded or removed.
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
from text_to_speech import (  # noqa: E402
    g2p_plain,
    g2p_ready,
    said_text,
    said_text_dashes_opened,
)

SOUND_STEPS = {
    "silent": g2p_as_it_was,
    "sounded_out": g2p_plain,
    "dictionary": g2p_ready,
}

TEXT_STEPS = {
    "curly": said_text_dashes_opened,
    "straight": said_text,
}


def sound_step_of(built, name):
    """One of the sound steps this repo has spoken with, built when first asked for.

    They are built on demand because each holds a dictionary of its own, and a
    run over chapters that all fall on one side of a door should not pay for the
    steps it never asks anything.
    """
    if name not in built:
        built[name] = SOUND_STEPS[name]()
    return built[name]


def steps_spoken_by(folder, doors):
    """Which text step and which sound step were live when this chapter was recorded.

    The doors are asked oldest first, so the answer is the newest one the sound
    is still older than.  A chapter older than every door was spoken by the
    oldest steps there are.
    """
    fallback_second, dictionary_second, apostrophe_second = doors
    if sound_before(folder, fallback_second):
        sound = "silent"
    elif sound_before(folder, dictionary_second):
        sound = "sounded_out"
    else:
        sound = "dictionary"
    marks = "curly" if sound_before(folder, apostrophe_second) else "straight"
    return marks, sound


def sounds_of(g2p, marks, texts):
    """Every piece of a chapter as this reading says it - the whole sounds, and the words.

    The whole sounds of a piece are what can be compared come what may.  The
    words are handed back beside them so that a difference can be named where the
    two readings agree about how many words there are.
    """
    pieces = []
    for text in texts:
        phonemes, tokens = g2p(marks(text))
        words = []
        for t in tokens:
            word = (getattr(t, "text", "") or "").strip()
            if not word_is(word):
                continue
            words.append((word, getattr(t, "phonemes", None)))
        pieces.append((phonemes, words))
    return pieces


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


def chapter_changed(was, now, said, changed_words):
    """What one chapter's recording gets wrong, judged on pieces and named on words.

    A piece whose whole sounds differ is a piece the recording gets wrong, and
    that is the count nothing can put out of step.  The words inside it are only
    walked where both readings found the same number of them; where they did not
    the piece is counted unlined, which is honest about a name this cannot give.

    A word the old reading left silent is noted apart from a word it merely said
    wrongly, because the silent ones are already queued for doing again and the
    others are the new work.
    """
    pieces_changed = 0
    pieces_unlined = 0
    dropped = 0
    changed = 0
    for (phonemes_was, words_was), (phonemes_now, words_now) in zip(was, now):
        if phonemes_was == phonemes_now:
            continue
        pieces_changed += 1
        if len(words_was) != len(words_now):
            pieces_unlined += 1
            continue
        for (word_was, sounds_was), (word_now, sounds_now) in zip(words_was, words_now):
            if word_was != word_now or sounds_was == sounds_now:
                continue
            if silent_is(sounds_was):
                dropped += 1
            else:
                changed += 1
                changed_words[word_was] += 1
                sounds_remember(said, word_was, sounds_was, sounds_now)
    return {
        "pieces_changed": pieces_changed,
        "pieces_unlined": pieces_unlined,
        "words_dropped": dropped,
        "words_changed": changed,
    }


def chapter_dropped_any(was):
    """Whether the reading of the day left any word of this chapter silent.

    It is asked of the old reading alone, so that it holds even where the two
    readings could not be lined up - which is exactly where the apostrophe was
    at work, and exactly where a word-by-word answer would have to say nothing.
    """
    for _phonemes, words in was:
        for _word, sounds in words:
            if silent_is(sounds):
                return True
    return False


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
    words_shown = args.get("words_shown", 60)

    asked = args.get("chapters")
    all_names = sorted(
        n for n in os.listdir(root) if os.path.isdir(os.path.join(root, n))
    )
    names = [n for n in all_names if n in set(asked)] if asked else all_names
    old_sound = [n for n in names if sound_before(os.path.join(root, n), newest_door)]

    built = {}
    spoken_by = collections.Counter()
    changed_words = collections.Counter()
    said = {}

    queue_dropped = []
    queue_changed_only = []
    same = []
    totals = collections.Counter()
    for name in old_sound:
        folder = os.path.join(root, name)
        texts = chapter_texts(folder)
        if not texts:
            continue
        marks, sound = steps_spoken_by(folder, doors)
        spoken_by[marks + " " + sound] += 1
        was = sounds_of(sound_step_of(built, sound), TEXT_STEPS[marks], texts)
        now = sounds_of(sound_step_of(built, "dictionary"), TEXT_STEPS["straight"], texts)
        counts = chapter_changed(was, now, said, changed_words)
        totals.update(counts)
        if not counts["pieces_changed"]:
            same.append(name)
        elif chapter_dropped_any(was):
            queue_dropped.append(name)
        else:
            queue_changed_only.append(name)

    print(
        json.dumps(
            {
                "root": root,
                "fallback_second": doors[0],
                "dictionary_second": doors[1],
                "apostrophe_second": doors[2],
                "chapters_all": len(all_names),
                "chapters_sound_before_door": len(old_sound),
                "chapters_by_steps_spoken": dict(spoken_by),
                "chapters_said_the_same": len(same),
                "chapters_dropped_a_word": len(queue_dropped),
                "chapters_changed_only": len(queue_changed_only),
                "pieces_changed": totals["pieces_changed"],
                "pieces_unlined": totals["pieces_unlined"],
                "words_dropped": totals["words_dropped"],
                "words_changed": totals["words_changed"],
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
