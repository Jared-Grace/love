import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
export function app_learn_js_rows_aligned(parent, rows) {
  arguments_assert(arguments, 2);
  ("rows of cells drawn as a grid, so each column lines up whatever the width of the cells above and below it - a chip holding a longer word does not push the rest of its row out of line. Each cell is a draw function, given the cell's own div - ",
    fn_name("app_learn_js_cycle_code_draw"),
    " makes one from a parts list, and a drawn arrow is another. Every row has as many cells as the first.");
  let grid = html_div(parent);
  let first = list_first(rows);
  let count = list_size(first);
  let json = json_to(count);
  let columns = text_combine_multiple(["repeat(", json, ", auto)"]);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": columns,
    "justify-content": "start",
    "align-items": "center",
    "column-gap": app_shared_spaced_small_gap(),
    "row-gap": app_shared_spaced_neighbor_gap(),
  });
  for (let row of rows) {
    for (let cell of row) {
      let div = html_div(grid);
      cell(div);
    }
  }
  return grid;
}
