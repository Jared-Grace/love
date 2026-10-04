import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
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
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { range } from "./range.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_rectangles_edges_draw(
  parent,
  columns,
  rows,
  first,
  second,
  across,
  down,
) {
  arguments_assert(arguments, 7);
  ("a picture of two rectangles of squares, with the lines between squares numbered as a ruler is, so a rectangle's edges can be read off it: the numbers across the top count the lines from the left, the numbers down the left count them from the top. first and second are each [left, right, top, bottom] in those numbers, and the squares both cover are filled with the overlap colour");
  ("across and down are each [start, end] of the shared part, whose numbers wear the start and end colours of the meetings lessons, or null to leave every number plain");
  ("The numbers sit on the lines and not on the squares, unlike the grid lessons' headings, because a meeting from 9 to 11 is two hours: the numbers are the edges, and left < right reads true exactly when a rectangle has a square between them.");
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
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
  function edge_color(edge, shared) {
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
  function label_draw(edge, shared, row_line, column_line, style) {
    "one line's number, placed in a grid cell and pushed onto the line beside it";
    let cell = html_div(grid);
    html_style_assign(cell, {
      "grid-row": text_to(row_line),
      "grid-column": text_to(column_line),
      ...style,
    });
    let color = edge_color(edge, shared);
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
    label_draw(edge, across, 1, column_line, style);
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
    label_draw(edge, down, row_line, 1, style);
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
      if (in_first && in_second) {
        html_style_background_color_set(square, overlap_color);
      } else if (in_first) {
        html_style_background_color_set(square, first_color);
      } else if (in_second) {
        html_style_background_color_set(square, second_color);
      }
    }
  }
  return grid;
}
