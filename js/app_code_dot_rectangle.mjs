import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_grid } from "./html_style_grid.mjs";
import { each_range } from "./each_range.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
export function app_code_dot_rectangle(parent, rows, columns, rotated) {
  ("a rectangle of dots picturing rows * columns as a grid of things counted; each dot is coloured by its BASE row, reusing the same red/green/blue/amber palette a number wears elsewhere (",
    fn_name("app_code_lesson_chip_color"),
    "), so a learner reads the rows at a glance. Pass rotated=true to draw the SAME dots turned a quarter: the grid becomes columns tall and rows wide, and every dot keeps the colour it had, so a coloured row turns into a coloured column - the eye sees it is the very same dots, which is why rows * columns === columns * rows");
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
      let color = app_code_lesson_chip_color(base_row);
      let dot = html_span(grid);
      html_style_assign(dot, {
        width: "0.7em",
        height: "0.7em",
        margin: "0.1em",
        "border-radius": "50%",
        "background-color": color,
      });
    }
  }
}
