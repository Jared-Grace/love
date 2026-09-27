import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_shared_color_blue_light } from "./app_shared_color_blue_light.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
export function app_code_number_line(parent, values, ends, middle) {
  arguments_assert(arguments, 4);
  ("$plain middle");
  ("a picture of a number line: values written left to right along one line, the two ends a question is about filled blue and the middle filled green, so a reader can see the middle sit the same distance from both ends");
  ("values is every number drawn, in order; a value that is not whole, like 4.5, is drawn in its own place between the two it falls between, which is the point of drawing it");
  ("The line is the bottom edge of the cells, drawn touching, so it runs unbroken under all of them.");
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "justify-content": "center",
    margin: "0.5em 0",
  });
  let line_color = app_shared_color_blue_dark();
  let end_color = app_shared_color_blue_light();
  let middle_color = app_shared_color_green_light();
  function cell_draw(value) {
    let text = text_to(value);
    let cell = html_div(row);
    html_style_assign(cell, {
      "border-bottom": text_combine("3px solid ", line_color),
      padding: "0.2em 0.1em 0.3em",
    });
    let label = html_div_text(cell, text);
    html_style_assign(label, {
      "min-width": "1.6em",
      padding: "0.1em 0.3em",
      "text-align": "center",
      "border-radius": "0.8em",
    });
    let is_end = list_includes(ends, value);
    if (is_end) {
      html_style_background_color_set(label, end_color);
    }
    let is_middle = equal(value, middle);
    if (is_middle) {
      html_style_background_color_set(label, middle_color);
    }
  }
  each(values, cell_draw);
  return row;
}
