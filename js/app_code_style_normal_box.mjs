import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_style_normal } from "./app_code_style_normal.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
export function app_code_style_normal_box(container) {
  arguments_assert(arguments, 1);
  ("an empty box in the look this app gives a written-out value, keeping the lines written into it, handed back so what the machine writes out can be put into it - all at once, or a line at a time as a program runs");
  ("Why the lines are kept is said by ",
    fn_name("app_code_style_normal_text"),
    ", which writes a whole value into one of these.");
  let box = html_div(container);
  app_code_style_normal(box);
  html_style_white_space(box, "pre-wrap");
  return box;
}
