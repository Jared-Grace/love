import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_grid_cell(node, row, column) {
  arguments_assert(arguments, 3);
  ("place a node in a specific grid row and column");
  let style_value = text_to(row);
  html_style_set(node, "grid-row", style_value);
  let style_value2 = text_to(column);
  html_style_set(node, "grid-column", style_value2);
}
