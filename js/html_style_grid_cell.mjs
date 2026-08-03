import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_grid_cell(node, row, column) {
  arguments_assert(arguments, 3);
  ("place a node in a specific grid row and column");
  ("The two lines always travel together, because a cell is a row and a column and naming only one of them leaves the browser to pick the other. Written apart they were also written differently in the two places that wrote them, which is how a grid ends up with one cell placed and one cell drifting.");
  ("A row or a column may be given as a number or as the words a grid line takes, so a band reaching the whole way across is the same call with 1 / -1 for its column rather than a second helper.");
  let style_value = text_to(row);
  html_style_set(node, "grid-row", style_value);
  let style_value2 = text_to(column);
  html_style_set(node, "grid-column", style_value2);
}
