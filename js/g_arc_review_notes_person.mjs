import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function g_arc_review_notes_person(notes, index) {
  "Every note already standing against one person's arc anywhere in it, taken out of the whole chapter's notes.";
  "IT IS COUNTED WHETHER OR NOT ANYTHING DRAWS IT. A note against a turn number the arc no longer has is still one somebody filed, so a count taken from what a page happens to show would quietly say nought where there is something to answer for.";
  "IT DOES NOT SAY WHO FILED WHAT, and hands the notes back exactly as they were stored.";
  arguments_assert(arguments, 2);
  let standing = [];
  for (let one of notes) {
    let person = property_get(one, "index");
    let theirs = equal(person, index);
    if (not(theirs)) {
      continue;
    }
    list_add(standing, one);
  }
  return standing;
}
