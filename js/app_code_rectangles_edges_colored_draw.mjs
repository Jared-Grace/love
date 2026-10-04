import { app_code_grid_edge_line_draw } from "./app_code_grid_edge_line_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { range } from "./range.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_rectangles_edges_colored_draw(
  parent,
  columns,
  rows,
  first,
  second,
  across,
  down,
  marked,
  overlap_color,
  corner,
) {
  arguments_assert(arguments, 10);
  ("corner is [x, y], the line on the left of a square and the line above it, drawn and numbered in the overlap colour, or null for none - asked by the human 2026-10-04 to show red lines at 2 and 2 under the square that starts there");
  ("overlap_color fills the squares both rectangles cover and the marked ones: the overlap colour when two rectangles cross, or the second rectangle's own colour when it sits inside the first, asked by the human 2026-10-04 for a rectangle inside a rectangle");
  ("a picture of two rectangles of squares, with the lines between squares numbered as a ruler is, so a rectangle's edges can be read off it: the numbers across the top count the lines from the left, the numbers down the left count them from the top. first and second are each [left, right, top, bottom] in those numbers, and the squares both cover are filled with the overlap colour");
  ("across and down are each [start, end] of the shared part, whose numbers wear the start and end colours of the meetings lessons, or null to leave every number plain");
  ("marked is [left, right, top, bottom] of squares filled with the overlap colour whether or not both rectangles cover them, or null for none - asked by the human 2026-10-04 to show the square a wrong answer counts, between two rectangles that share none");
  ("The numbers sit on the lines and not on the squares, unlike the grid lessons' headings, because a meeting from 9 to 11 is two hours: the numbers are the edges, and left < right reads true exactly when a rectangle has a square between them.");
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  let plain = app_shared_color_code_background();
  let border_color = app_shared_color_blue_dark();
  let gap = app_shared_spaced_tiny_gap();
  let grid = html_div(parent);
  let t = text_to(columns);
  let t2 = text_to(rows);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": text_combine_multiple([
      "1.6em repeat(",
      t,
      ", 2.2em)",
    ]),
    "grid-template-rows": text_combine_multiple([
      "1.6em repeat(",
      t2,
      ", 2.2em)",
    ]),
    gap,
    "justify-content": "center",
    margin: "0.5em 0",
  });
  let no_corner = null_is(corner);
  let corner_x = no_corner ? null : list_first(corner);
  let corner_y = no_corner ? null : list_second(corner);
  function edge_color(edge, shared, corner_edge) {
    if (equal(edge, corner_edge)) {
      return overlap_color;
    }
    if (null_is(shared)) {
      return plain;
    }
    let right2 = list_first(shared);
    if (equal(edge, right2)) {
      return start_color;
    }
    let right3 = list_second(shared);
    if (equal(edge, right3)) {
      return end_color;
    }
    return plain;
  }
  function label_draw(edge, shared, row_line, column_line, style, corner_edge) {
    "one line's number, placed in a grid cell and pushed onto the line beside it";
    let cell = html_div(grid);
    html_style_assign(cell, {
      "grid-row": text_to(row_line),
      "grid-column": text_to(column_line),
      ...style,
    });
    let color = edge_color(edge, shared, corner_edge);
    let t3 = text_to(edge);
    let chip = app_code_explain_number_colored(t3, color);
    chip(cell);
  }
  for (let edge of range(columns + 1)) {
    let last = equal(edge, columns);
    let column_line = last ? columns + 1 : edge + 2;
    let style = last
      ? {
          "justify-self": "end",
          "align-self": "center",
          transform: "translateX(50%)",
        }
      : {
          "justify-self": "start",
          "align-self": "center",
          transform: "translateX(-50%)",
        };
    label_draw(edge, across, 1, column_line, style, corner_x);
  }
  for (let edge of range(rows + 1)) {
    let last = equal(edge, rows);
    let row_line = last ? rows + 1 : edge + 2;
    let style = last
      ? {
          "align-self": "end",
          "justify-self": "center",
          transform: "translateY(50%)",
        }
      : {
          "align-self": "start",
          "justify-self": "center",
          transform: "translateY(-50%)",
        };
    label_draw(edge, down, row_line, 1, style, corner_y);
  }
  function inside(rectangle, row, column) {
    let [left, right, top, bottom] = rectangle;
    let r =
      less_than_equal(left, column) &&
      less_than(column, right) &&
      less_than_equal(top, row) &&
      less_than(row, bottom);
    return r;
  }
  for (let row of range(rows)) {
    for (let column of range(columns)) {
      let square = html_div(grid);
      html_style_assign(square, {
        "grid-row": text_to(row + 2),
        "grid-column": text_to(column + 2),
        border: text_combine("1px solid ", border_color),
        "border-radius": "0.3em",
      });
      let in_first = inside(first, row, column);
      let in_second = inside(second, row, column);
      let b = null_is(marked);
      let in_marked = not(b) && inside(marked, row, column);
      if ((in_first && in_second) || in_marked) {
        html_style_background_color_set(square, overlap_color);
      } else if (in_first) {
        html_style_background_color_set(square, first_color);
      } else if (in_second) {
        html_style_background_color_set(square, second_color);
      }
    }
  }
  function line_draw(edge, shared, count, vertical, corner_edge) {
    "every number's line drawn on through the squares in the number's colour, so it reads as x = 2 or y = 1 on a graph: asked by the human 2026-10-04 for the coloured numbers, then for every number after a student read them as columns. A coloured line lies above a plain one where they cross, and a corner line above both, asked by the human the same day, since otherwise the later-drawn lines cover it";
    let color = edge_color(edge, shared, corner_edge);
    let last = equal(edge, count);
    let index = last ? count + 1 : edge + 2;
    let span = vertical ? rows : columns;
    let on_corner = equal(edge, corner_edge);
    let b2 = equal(color, plain);
    let colored = not(b2);
    let layer = on_corner ? "3" : colored ? "2" : "1";
    app_code_grid_edge_line_draw(
      grid,
      color,
      index,
      last,
      span,
      vertical,
      layer,
    );
  }
  for (let edge of range(columns + 1)) {
    line_draw(edge, across, columns, true, corner_x);
  }
  for (let edge of range(rows + 1)) {
    line_draw(edge, down, rows, false, corner_y);
  }
  return grid;
}
