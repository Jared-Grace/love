import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function placed_lines_of_kind(placed, kind) {
  "$plain kind";
  "Out of changed lines each carrying the kind of thing it is, the lines of one named kind, in the order they were changed in.";
  "IT IS THE ONE WAY THE KINDS ARE NARROWED, so no reader has to walk the pairs itself and none can quietly read a line's kind off the line again while it is at it.";
  arguments_assert(arguments, 2);
  let lines = [];
  for (let record of placed) {
    let same = property_equals(record, "kind", kind);
    if (same) {
      let line = property_get(record, "line");
      list_add(lines, line);
    }
  }
  return lines;
}
