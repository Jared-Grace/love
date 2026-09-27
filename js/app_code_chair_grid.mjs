import { app_code_chair_emoji } from "./app_code_chair_emoji.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
import { multiply } from "./multiply.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_chair_grid(parent, count, width, marked) {
  arguments_assert(arguments, 4);
  ("$plain marked");
  ("a picture of chairs numbered from 0 in rows of width: row numbers down the left in the third pointing colour, column numbers across the top in the fourth, each a code chip as numbers in the writing are, every chair in a whole row before the marked chair's row filled blue and the marked chair filled green, so a reader can count the chairs that come before it");
  ("count is how many chairs are drawn; the last row may be short, as a real list's is");
  ("Each chair shows the chair emoji above its number, asked by the human 2026-09-27, so the numbered grid is seen to be the same chairs as the plain picture of chairs drawn before it.");
  let p = divide(marked, width);
  let rows_before = floor(p);
  let start = multiply(rows_before, width);
  let grid = html_div(parent);
  let t = text_to(width + 1);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": text_combine_multiple(["repeat(", t, ", 2.2em)"]),
    gap: "0.25em",
    "justify-content": "center",
    margin: "0.5em 0",
  });
  let before_color = app_code_highlight_color();
  let marked_color = app_code_highlight_color_second();
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
  let row_color = app_code_highlight_color_third();
  let column_color = app_code_highlight_color_fourth();
  function heading_chip_draw(text, color) {
    let cell = html_div(grid);
    html_style_assign(cell, {
      "text-align": "center",
      "align-self": "center",
    });
    let chip = html_span_code_dark_colored(cell, [text], [color]);
    html_style_background_color_set(chip, color);
  }
  function column_heading_draw(column) {
    let t2 = text_to(column);
    heading_chip_draw(t2, column_color);
  }
  let list = range(width);
  each(list, column_heading_draw);
  function chair_draw(index) {
    let column = modulo(index, width);
    if (equal(column, 0)) {
      let input = divide(index, width);
      let t3 = text_to(input);
      heading_chip_draw(t3, row_color);
    }
    let text2 = text_to(index);
    let chair = html_div(grid);
    let text3 = app_code_chair_emoji();
    let picture = html_div_text(chair, text3);
    html_style_assign(picture, {
      "font-size": "0.8em",
      "line-height": "1.1",
    });
    html_div_text(chair, text2);
    html_style_assign(chair, {
      "text-align": "center",
      padding: "0.3em 0",
      border: text_combine("1px solid ", border_color),
      "border-radius": "0.3em",
    });
    if (less_than(index, start)) {
      html_style_assign(chair, {
        color: "white",
      });
      html_style_background_color_set(chair, before_color);
    }
    if (equal(index, marked)) {
      html_style_assign(chair, {
        color: "white",
      });
      html_style_background_color_set(chair, marked_color);
    }
  }
  let list2 = range(count);
  each(list2, chair_draw);
  return grid;
}
