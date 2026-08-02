import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_grid } from "./html_style_grid.mjs";
import { each_range } from "./each_range.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { round } from "./round.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_dot_rectangle(parent, rows, columns) {
  "a rectangle of dots, columns wide and rows tall, picturing rows * columns as a grid of things counted; the very same dots turned a quarter read as columns * rows, which is why multiplying keeps its value when the two numbers are swapped. each ROW gets its own hue and each COLUMN its own lightness, so the rows and the columns are both easy to see and count";
  let grid = html_div(parent);
  html_style_grid(grid, columns, rows);
  html_style_assign(grid, {
    "align-self": "flex-start",
    width: "fit-content",
  });
  each_range(rows, add_row);
  return grid;
  function add_row(row) {
    each_range(columns, add_cell);
    function add_cell(column) {
      let dot = html_span(grid);
      let color = dot_color(row, column);
      html_style_assign(dot, {
        width: "0.7em",
        height: "0.7em",
        margin: "0.1em",
        "border-radius": "50%",
        "background-color": color,
      });
    }
  }
  function dot_color(row, column) {
    "the ROW picks the hue (each row a clearly different colour), the COLUMN picks the lightness (each column a step lighter)";
    let top = multiply(row, 360);
    let n = divide(top, rows);
    let hue = round(n);
    let column_last = subtract(columns, 1);
    let column_span = equal(column_last, 0) ? 1 : column_last;
    let top2 = multiply(column, 35);
    let lightness = round(30 + divide(top2, column_span));
    let combined = text_combine_multiple([
      "hsl(",
      hue,
      ", 75%, ",
      lightness,
      "%)",
    ]);
    return combined;
  }
}
