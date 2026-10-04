import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_code_grid_edge_line_draw(
  grid,
  color,
  index,
  last,
  span,
  vertical,
  layer,
) {
  arguments_assert(arguments, 7);
  ("a numbered line drawn on through the squares of a grid picture, so a number reads as a line between squares and not as a column, asked by the human 2026-10-04 after a student read the numbers as columns. index is the grid track the line runs beside: at its start, or at its end when last, as the numbers are placed. The line crosses span tracks from track 2, the first after the numbers, and sits in the gap between squares. vertical draws it top to bottom, else left to right; layer is its z-index, so a coloured line can lie above a plain one where they cross.");
  let shift = last ? "calc(0.125em + 1.5px)" : "calc(-0.125em - 1.5px)";
  let side = last ? "end" : "start";
  let line = html_div(grid);
  let border = text_combine("3px solid ", color);
  let t = text_to(span);
  let across = text_combine("2 / span ", t);
  let t2 = text_to(index);
  let style = vertical
    ? {
        "grid-column": t2,
        "grid-row": across,
        "justify-self": side,
        width: "0",
        "border-left": border,
        transform: text_combine_multiple(["translateX(", shift, ")"]),
      }
    : {
        "grid-row": t2,
        "grid-column": across,
        "align-self": side,
        height: "0",
        "border-top": border,
        transform: text_combine_multiple(["translateY(", shift, ")"]),
      };
  html_style_assign(line, {
    ...style,
    "pointer-events": "none",
    "z-index": layer,
  });
  return line;
}
