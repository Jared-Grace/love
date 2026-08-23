import { g_arc_review_notes_person } from "./g_arc_review_notes_person.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function g_arc_review_notes_turn(notes, index, number) {
  "Every note already standing against one line of one person's arc, taken out of the whole chapter's notes.";
  "A NOTE IS ADDRESSED BY TWO NUMBERS AND NEITHER ONE ALONE FINDS IT. The turn numbers restart for each person, so turn six exists once per arc in the chapter; a reader filtering on the turn alone would show one person the notes filed against somebody else's line and there is nothing in a note's own words that would look wrong.";
  "IT DOES NOT SAY WHO FILED WHAT, and hands the notes back exactly as they were stored. Whether a check or a person found it decides what may later be thrown away, which is a question for the store and not for the page a reviewer is reading.";
  arguments_assert(arguments, 3);
  let theirs = g_arc_review_notes_person(notes, index);
  let standing = [];
  for (let one of theirs) {
    let turn = property_get(one, "turn");
    let here = equal(turn, number);
    if (not(here)) {
      continue;
    }
    list_add(standing, one);
  }
  return standing;
}
