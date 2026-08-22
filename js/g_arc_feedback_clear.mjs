import { g_arc_feedback_kept_write } from "./g_arc_feedback_kept_write.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
export async function g_arc_feedback_clear(chapter_code, index) {
  "Drop every note standing against one person's arc, leaving the notes against everybody else in the chapter where they are, and say how many were dropped.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A NOTE ACTED ON MUST GO, or the next revision is handed the same fault again and rewrites a line that was already put right. Worse, the reader who asks what still stands against this person is answered with work already done, and cannot tell which half is which.";
  "IT CLEARS ONE PERSON AND NOT THE CHAPTER, because revising is done one person at a time. A whole-chapter clear run after revising one of them would throw away the notes nobody has acted on yet - silently, since a note is gone with nothing recording that it was ever made.";
  "IT SAYS HOW MANY IT DROPPED rather than answering nothing. Dropping none is what a wrong person number looks like and also what an already-clean person looks like, and the two need telling apart by whoever ran it.";
  let person = number_from_text(index);
  function note_other(note) {
    let left = property_get(note, "index");
    let neq = not_equal(left, person);
    return neq;
  }
  let r = await g_arc_feedback_kept_write(chapter_code, note_other);
  return r;
}
