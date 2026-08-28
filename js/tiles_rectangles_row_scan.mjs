import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { tiles_rectangles_row_full } from "./tiles_rectangles_row_full.mjs";
import { each_range } from "./each_range.mjs";
import { list_add } from "./list_add.mjs";
import { each_range_from } from "./each_range_from.mjs";
export function tiles_rectangles_row_scan(
  y,
  key_of,
  left,
  rectangles,
  x_least,
  x_most,
) {
  arguments_assert(arguments, 6);
  function column_scan(x) {
    let key = key_of(x, y);
    let here = left.has(key);
    if (not(here)) {
      return;
    }
    let across = 1;
    let wider = true;
    while (wider) {
      let next = add(x, across);
      let key_next = key_of(next, y);
      wider = left.has(key_next);
      if (wider) {
        across = add(across, 1);
      }
    }
    let down = 1;
    let deeper = true;
    while (deeper) {
      let row = add(y, down);
      deeper = tiles_rectangles_row_full(row, x, across, key_of, left);
      if (deeper) {
        down = add(down, 1);
      }
    }
    function cell_take_row(step_y) {
      function cell_take_column(step_x) {
        let column = add(x, step_x);
        let row = add(y, step_y);
        let key_taken = key_of(column, row);
        left.delete(key_taken);
      }
      each_range(across, cell_take_column);
    }
    each_range(down, cell_take_row);
    let rectangle = {
      x,
      y,
      across,
      down,
    };
    list_add(rectangles, rectangle);
  }
  each_range_from(x_least, x_most, column_scan);
}
