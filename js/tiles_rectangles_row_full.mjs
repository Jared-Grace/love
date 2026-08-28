import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { each_range } from "./each_range.mjs";
export function tiles_rectangles_row_full(row, x_from, width, key_of, left) {
  arguments_assert(arguments, 5);
  let all = true;
  function column_check(step) {
    let column = add(x_from, step);
    let key = key_of(column, row);
    let there = left.has(key);
    if (not(there)) {
      all = false;
    }
  }
  each_range(width, column_check);
  return all;
}
