import { arguments_assert } from "./arguments_assert.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { text_split } from "./text_split.mjs";
import { list_between } from "./list_between.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_flat } from "./list_flat.mjs";
export function app_code_chair_parts_words_split(parts) {
  arguments_assert(arguments, 1);
  ("a line's parts, text and code taking turns, with every row, rows, column and columns in its writing cut out into a writing part of its own, an empty code part either side, so a pointer can colour the word as it colours blue chairs");
  ("The turns are kept: a writing part cut at n words becomes 4n + 1 parts, starting and ending with writing, so every code part after it stays at an odd place.");
  function part_split(part, index) {
    let left = modulo(index, 2);
    let is_code = equal(left, 1);
    if (is_code) {
      let r = [part];
      return r;
    }
    let pieces = text_split(part, /\b(rows?|columns?|Rows?|Columns?)\b/);
    let split = list_between(pieces, "");
    return split;
  }
  let lists = list_map_index(parts, part_split);
  let flat = list_flat(lists);
  return flat;
}
