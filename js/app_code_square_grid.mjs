import { function_is } from "./function_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each } from "./each.mjs";
import { range } from "./range.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_code_square_grid(parent, rows, columns, headings, marks) {
  arguments_assert(arguments, 5);
  ("a picture of empty squares in rows and columns, as the chair pictures draw chairs: when headings is true the row numbers go down the left in the third pointing colour and the column numbers across the top in the fourth, each a code chip, as ",
    fn_name("app_code_chair_grid"),
    " draws them. marks is a list of [row, column, text, color]: that square shows the text - or, when text is a function, the function draws into the square, as an arrow is drawn - and is filled with the color unless the color is null");
  let extra = headings ? 1 : 0;
  let grid = html_div(parent);
  let t = text_to(columns + extra);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": text_combine_multiple(["repeat(", t, ", 2.2em)"]),
    "grid-auto-rows": "2.2em",
    gap: "0.25em",
    "justify-content": "center",
    margin: "0.5em 0",
  });
  let border_color = app_shared_color_blue_dark();
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
  if (headings) {
    html_div(grid);
    function column_heading_draw(column) {
      let t2 = text_to(column);
      heading_chip_draw(t2, column_color);
    }
    let list = range(columns);
    each(list, column_heading_draw);
  }
  function row_draw(row) {
    if (headings) {
      let t3 = text_to(row);
      heading_chip_draw(t3, row_color);
    }
    function square_draw(column) {
      function at(mark2) {
        let [mark_row, mark_column] = mark2;
        let r = equal(mark_row, row) && equal(mark_column, column);
        return r;
      }
      let mark = list_find_or_null(marks, at);
      let square = html_div(grid);
      html_style_assign(square, {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        border: text_combine("1px solid ", border_color),
        "border-radius": "0.3em",
      });
      if (not_equal(mark, null)) {
        let [, , text, color] = mark;
        if (function_is(text)) {
          text(square);
        } else {
          html_div_text(square, text);
        }
        if (not_equal(color, null)) {
          html_style_assign(square, {
            color: "white",
          });
          html_style_background_color_set(square, color);
        }
      }
    }
    let list2 = range(columns);
    each(list2, square_draw);
  }
  let list3 = range(rows);
  each(list3, row_draw);
  return grid;
}
