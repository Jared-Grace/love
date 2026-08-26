import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function bible_glyph_collision_marks_row(rows, entry) {
  "$plain rows";
  "$plain entry";
  "The one row a mark belongs on, made if this is the first mark to reach it, and already told that the mark arrived.";
  "It exists because a mark reaches the tally by three different doors - decided, ambiguous, and seated on neither root - and all three do the same three things first: work out which shared picture the mark is under, start that picture's row if nothing has landed on it yet, and add the mark to its total. Only what happens afterwards differs, so only that is left to the caller.";
  "The picture is named the way the collisions record names it, roots sorted and joined, so a reading here and a line of that record can be laid beside each other without either being translated.";
  arguments_assert(arguments, 2);
  let list = list_sort_text(entry.sharers);
  let sharers = list_join_plus(list);
  let name = list_join_space([entry.glyph, sharers]);
  let started = property_exists(rows, name);
  if (not(started)) {
    property_set(rows, name, {
      name,
      marks: 0,
      decided: {},
      ambiguous: [],
      unseated: [],
    });
  }
  let row = property_get(rows, name);
  row.marks = add(row.marks, entry.drew);
  return row;
}
