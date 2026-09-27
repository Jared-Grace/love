import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { app_shared_color_blue_light } from "./app_shared_color_blue_light.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { each } from "./each.mjs";
import { range } from "./range.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_seat_grid(parent, count, width, marked) {
  arguments_assert(arguments, 4);
  ("$plain marked");
  ("a picture of seats numbered from 0 in rows of width: row numbers down the left, column numbers across the top, every seat in a whole row before the marked seat's row filled blue and the marked seat filled green, so a reader can count the seats that come before it");
  ("count is how many seats are drawn; the last row may be short, as a real list's is");
  let rows_before = Math.floor(marked / width);
  let start = rows_before * width;
  let grid = html_div(parent);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": text_combine(
      "repeat(",
      text_to(width + 1),
      ", 2.2em)",
    ),
    gap: "0.25em",
    "justify-content": "center",
    margin: "0.5em 0",
  });
  let before_color = app_shared_color_blue_light();
  let marked_color = app_shared_color_green_light();
  let border_color = app_shared_color_blue_dark();
  function heading_draw(text) {
    let heading = html_div_text(grid, text);
    html_style_assign(heading, {
      "text-align": "center",
      opacity: "0.6",
      "font-size": "0.85em",
      "align-self": "center",
    });
  }
  heading_draw("");
  function column_heading_draw(column) {
    heading_draw(text_to(column));
  }
  each(range(width), column_heading_draw);
  function seat_draw(index) {
    let column = index % width;
    if (equal(column, 0)) {
      heading_draw(text_to(index / width));
    }
    let seat = html_div_text(grid, text_to(index));
    html_style_assign(seat, {
      "text-align": "center",
      padding: "0.3em 0",
      border: text_combine("1px solid ", border_color),
      "border-radius": "0.3em",
    });
    if (less_than(index, start)) {
      html_style_background_color_set(seat, before_color);
    }
    if (equal(index, marked)) {
      html_style_background_color_set(seat, marked_color);
    }
  }
  each(range(count), seat_draw);
  return grid;
}
