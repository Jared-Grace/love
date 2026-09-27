import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { multiply } from "./multiply.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_chair_emoji } from "./app_code_chair_emoji.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function app_code_chair_emoji_grid(parent, rows, columns) {
  arguments_assert(arguments, 3);
  ("a picture of chairs standing in rows and columns, each a chair emoji and nothing else - the chairs before they are numbered, so a reader sees what rows and columns are before any number is put on them. Asked for by the human, 2026-09-27");
  let grid = html_div(parent);
  let t = text_to(columns);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": text_combine_multiple(["repeat(", t, ", 2.2em)"]),
    gap: "0.25em",
    "justify-content": "center",
    margin: "0.5em 0",
    "font-size": "1.4em",
  });
  let count = multiply(rows, columns);
  function chair_draw() {
    let text = app_code_chair_emoji();
    let chair = html_div_text(grid, text);
    html_style_assign(chair, {
      "text-align": "center",
    });
  }
  let list = range(count);
  each(list, chair_draw);
  return grid;
}
