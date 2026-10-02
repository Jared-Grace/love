import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_square_grid_past_right(
  grid,
  headings,
  row,
  columns,
  text,
  color,
) {
  arguments_assert(arguments, 6);
  ("a square drawn just past the right edge of a grid that ",
    fn_name("app_code_square_grid"),
    " drew, in the given row, showing the text on the colour, its edge dashed, because there is no such square in the grid: the picture of a position that is not inside it, asked for by the human 2026-10-02 for Square inside the grid. The same size and rounding as the grid's own squares, so it reads as the next column.");
  ("It is placed out of the grid's flow, at the grid line after the last column, because a square placed in the flow would make a new column that every later square flows into. Only the right edge is built, because that is the one a lesson draws; a square past the bottom, the top or the left would be the same shape with another line.");
  let extra = headings ? 1 : 0;
  html_style_assign(grid, {
    position: "relative",
  });
  let row_line = row + extra + 1;
  let column_line = columns + extra + 1;
  let square = html_div(grid);
  let left2 = text_to(row_line);
  let right = app_shared_color_blue_dark();
  html_style_assign(square, {
    position: "absolute",
    "grid-row": text_combine(left2, " / span 1"),
    "grid-column-start": text_to(column_line),
    left: "0.25em",
    top: "0",
    width: "2.2em",
    height: "2.2em",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "box-sizing": "border-box",
    border: text_combine("1px dashed ", right),
    "border-radius": "0.3em",
    color: "white",
  });
  html_div_text(square, text);
  html_style_background_color_set(square, color);
}
