import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_grid_edge_line_draw } from "./app_code_grid_edge_line_draw.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_code_grid_edge_line_pair_draw(
  grid,
  before_color,
  after_color,
  index,
  last,
  span,
  vertical,
  layer,
) {
  arguments_assert(arguments, 8);
  ("a numbered line in two colours side by side, before_color on the side a reader meets first - left of a line drawn top to bottom, above one drawn left to right - and after_color on the other, for a number that ends one span and starts another, asked by the human 2026-10-05. Placed as ",
    fn_name("app_code_grid_edge_line_draw"),
    " places one line, of the same width, so it fits the same gap.");
  let line = app_code_grid_edge_line_draw(
    grid,
    after_color,
    index,
    last,
    span,
    vertical,
    layer,
  );
  let before = text_combine("2px solid ", before_color);
  let after = text_combine("2px solid ", after_color);
  let sides = vertical
    ? {
        "border-left": before,
        "border-right": after,
      }
    : {
        "border-top": before,
        "border-bottom": after,
      };
  html_style_assign(line, sides);
  return line;
}
