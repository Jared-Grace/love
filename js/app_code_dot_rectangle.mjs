import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_grid } from "./html_style_grid.mjs";
import { each_range } from "./each_range.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
export function app_code_dot_rectangle(parent, rows, columns, rotated) {
  ("a rectangle of dots picturing rows * columns as a grid of things counted. Each dot has its OWN colour: its BASE row picks the hue (the red/green/blue/amber palette a number wears elsewhere, ",
    fn_name("app_code_lesson_chip_color"),
    ") and its BASE column picks how solid it is (a step more opaque across the row), so all rows * columns dots are distinct and the eye can follow any single one. Pass rotated=true to draw the SAME dots turned a quarter: the grid becomes columns tall and rows wide, and every dot keeps its exact colour - a coloured row turns into a coloured column - so the eye sees it is the very same dots, which is why rows * columns === columns * rows");
  let grid_rows = rotated ? columns : rows;
  let grid_columns = rotated ? rows : columns;
  let grid = html_div(parent);
  html_style_grid(grid, grid_columns, grid_rows);
  html_style_assign(grid, {
    "align-self": "flex-start",
    width: "fit-content",
  });
  each_range(grid_rows, add_row);
  return grid;
  function add_row(grid_row) {
    each_range(grid_columns, add_cell);
    function add_cell(grid_column) {
      let left = subtract(rows, 1);
      let base_row = rotated ? subtract(left, grid_column) : grid_row;
      let base_column = rotated ? grid_row : grid_column;
      let color = app_code_lesson_chip_color(base_row);
      let opacity = dot_opacity(base_column);
      let dot = html_span(grid);
      html_style_assign(dot, {
        width: "0.7em",
        height: "0.7em",
        margin: "0.1em",
        "border-radius": "50%",
        "background-color": color,
        opacity,
      });
    }
  }
  function dot_opacity(base_column) {
    "each column a step more solid, so every dot in a row is a slightly different shade of the row's colour and so is unique";
    let column_last = subtract(columns, 1);
    let column_span = equal(column_last, 0) ? 1 : column_last;
    let top = multiply(base_column, 0.55);
    let opacity = 0.45 + divide(top, column_span);
    return opacity;
  }
}
