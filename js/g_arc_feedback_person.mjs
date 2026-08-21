import { g_arc_feedback_chapter } from "./g_arc_feedback_chapter.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
export async function g_arc_feedback_person(chapter_code, index) {
  "Every note standing against one person's arc, whoever filed it, in the order they were filed.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "ONE PERSON IS THE UNIT BECAUSE REVISING IS. A chapter's notes are kept in one file so that two sources can be read together, but nothing ever acts on a chapter - a reviser is handed one person, rewrites their lines, and the notes against everybody else must be exactly where they were afterwards.";
  "IT DOES NOT SAY WHO FILED WHAT, and a reviser has no business knowing. A note reads the same either way and asks for the same thing; letting a reviser see that a machine found one would invite it to weigh them differently, and the whole point of one queue is that they are the same kind of thing.";
  let notes = await g_arc_feedback_chapter(chapter_code);
  let wanted = number_from_text(index);
  function note_theirs(note) {
    let left = property_get(note, "index");
    let same = equal(left, wanted);
    return same;
  }
  let standing = list_filter(notes, note_theirs);
  return standing;
}
