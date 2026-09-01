import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
export function g_arc_review_base(reviewed_arcs, backup_arcs, index) {
  "$plain index";
  "Which older copy of one person's arc the moved lines should be measured from, handed back along with the word for where it came from.";
  "THE WORD TRAVELS WITH THE ARC BECAUSE THE PAGE MUST NOT CLAIM THE WRONG ONE. Told only that there is a base, a screen can say no more than that something has moved since something; told which, it can say moved since you read it or moved since the backup was taken, and those are different claims about the reader.";
  "A READING BEATS A BACKUP WHENEVER THERE IS ONE, because the reader marked it themselves and it is the arc they actually judged. The backup is a stand-in for a reading that never happened and stops being wanted the moment a real one exists.";
  "NEITHER ONE IS A REAL ANSWER AND IT IS SAID PLAINLY RATHER THAN AS AN EMPTY ARC. A person written since the last backup ran has no older copy at all, and measuring them against nothing would mark every line they have as new.";
  arguments_assert(arguments, 3);
  let read_arc = g_arc_chapter_person_or_null(reviewed_arcs, index);
  let read = not_equal(read_arc, null);
  if (read) {
    let mine = {
      arc: read_arc,
      source: "read",
    };
    return mine;
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
