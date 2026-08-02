import { multiply } from "./multiply.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_grid } from "./html_style_grid.mjs";
import { each_range } from "./each_range.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
export function app_code_dot_rectangle(parent, rows, columns) {
  "a rectangle of dots, columns wide and rows tall, picturing rows * columns as a grid of things counted; the very same dots turned a quarter read as columns * rows, which is why multiplying keeps its value when the two numbers are swapped";
  let grid = html_div(parent);
  html_style_grid(grid, columns, rows);
  let cells = multiply(rows, columns);
  each_range(cells, add_dot);
  return grid;
  function add_dot() {
    let dot = html_span(grid);
    let color = app_shared_color_code_background();
    html_style_assign(dot, {
      width: "0.6em",
      height: "0.6em",
      margin: "0.12em",
      "border-radius": "50%",
      "background-color": color,
    });
  }
}
