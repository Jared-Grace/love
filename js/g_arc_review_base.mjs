import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
export function g_arc_review_base(
  reviewed_arcs,
  previous_arcs,
  backup_arcs,
  index,
) {
  "$plain index";
  "Which older copy of one person's arc the moved lines should be measured from, handed back along with the word for where it came from.";
  "THE WORD TRAVELS WITH THE ARC BECAUSE THE PAGE MUST NOT CLAIM THE WRONG ONE. Told only that there is a base, a screen can say no more than that something has moved since something; told which, it can say moved since you read it or moved since the backup was taken, and those are different claims about the reader.";
  "A READING BEATS EVERYTHING ELSE WHENEVER THERE IS ONE, because the reader marked it themselves and it is the arc they actually judged. The other two are stand-ins for a reading that never happened and stop being wanted the moment a real one exists.";
  "THE COPY A REVISION REPLACED BEATS THE BACKUP, and that is the whole of why it is asked for at all. Both are stand-ins, so the question between them is only which is nearer to what the reader last had in front of them - and the copy a revision wrote over is the arc as it stood a moment before that revision, while the backup is the oldest thing on the machine. Measured against the backup, five lines answering the reader's own notes were shown among fifty-one they had already seen and were told nothing apart from; measured against the replaced copy, the five are the whole of what is marked, which is the question they were asking.";
  "IT IS RIGHT ONLY BECAUSE A REVISION ANSWERS A READING. The arc is rewritten from the notes filed against it, so what a revision replaced is what the reader who filed them was reading. Where two revisions land with no reading between them the first one's changes stop being marked - which is a real loss, and the reading press is what closes it, so a reviewer who wants the record kept for them presses it rather than leaning on a stand-in.";
  "NONE OF THEM IS A REAL ANSWER AND IT IS SAID PLAINLY RATHER THAN AS AN EMPTY ARC. A person written since the last backup ran and never revised has no older copy at all, and measuring them against nothing would mark every line they have as new.";
  arguments_assert(arguments, 4);
  let read_arc = g_arc_chapter_person_or_null(reviewed_arcs, index);
  let read = not_equal(read_arc, null);
  if (read) {
    let mine = {
      arc: read_arc,
      source: "read",
    };
    return mine;
  }
  let previous_arc = g_arc_chapter_person_or_null(previous_arcs, index);
  let revised = not_equal(previous_arc, null);
  if (revised) {
    let replaced = {
      arc: previous_arc,
      source: "previous",
    };
    return replaced;
  }
  let backup_arc = g_arc_chapter_person_or_null(backup_arcs, index);
  let kept = not_equal(backup_arc, null);
  if (kept) {
    let older = {
      arc: backup_arc,
      source: "backup",
    };
    return older;
  }
  let none = {
    arc: null,
    source: "none",
  };
  return none;
}
