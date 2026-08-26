import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_collision_picture_name } from "./bible_glyph_collision_picture_name.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function bible_glyph_collision_marks_row(rows, entry) {
  "$plain rows";
  "$plain entry";
  "The one row a mark belongs on, made if this is the first mark to reach it, and already told that the mark arrived.";
  "It exists because a mark reaches the tally by four different doors - decided by presence, paired by position, ambiguous, and seated on neither root - and all four do the same three things first: work out which shared picture the mark is under, start that picture's row if nothing has landed on it yet, and add the mark to its total. Only what happens afterwards differs, so only that is left to the caller.";
  "THE TWO TALLIES ARE KEPT APART BECAUSE THE TWO RULES ARE NOT EQUALLY SURE. A mark decided by presence is decided by the verse containing one word and not the other, which admits no doubt. A mark paired by position is decided by the counts agreeing and the author having drawn in the original's order, which is an assumption held up by evidence. Adding them together would spend the difference, and the difference is the only thing a reader deciding how far to trust the number has to go on.";
  "The picture is named next door, the way the collisions record names it, so a reading here and a line of that record can be laid beside each other without either being translated.";
  arguments_assert(arguments, 2);
  let name = bible_glyph_collision_picture_name(entry);
  let started = property_exists(rows, name);
  if (not(started)) {
    property_set(rows, name, {
      name,
      marks: 0,
      decided: {},
      paired: {},
      ambiguous: [],
      unseated: [],
    });
  }
  let row = property_get(rows, name);
  row.marks = add(row.marks, entry.drew);
  return row;
}
