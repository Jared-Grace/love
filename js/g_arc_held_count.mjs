import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { properties_size } from "./properties_size.mjs";
import { add } from "./add.mjs";
export function g_arc_held_count(held_by_turn) {
  "How many lines in one arc were asked about by the last wave of notes and left exactly as they were.";
  "IT COUNTS THE FIELDS AND NOT THE TURNS, because a turn is where a line lives and a note is filed against a line. Two notes on one turn answered by keeping both wordings is two asks the reader is owed an account of, and counting the turn would report it as one.";
  arguments_assert(arguments, 1);
  let count = 0;
  let keys = object_property_names(held_by_turn);
  for (let key of keys) {
    let fields = property_get(held_by_turn, key);
    let size = properties_size(fields);
    count = add(count, size);
  }
  return count;
}
