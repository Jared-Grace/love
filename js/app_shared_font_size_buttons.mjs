import { app_shared_font_size_larger_text } from "./app_shared_font_size_larger_text.mjs";
import { app_shared_font_size_smaller_text } from "./app_shared_font_size_smaller_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_factor } from "./app_shared_font_size_factor.mjs";
import { multiply_curried_right } from "./multiply_curried_right.mjs";
import { divide_curried_right } from "./divide_curried_right.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_font_size_adjust_curried } from "./app_shared_font_size_adjust_curried.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_font_size_buttons(parent, context) {
  "the one pair of buttons that grows and shrinks the text of whatever app they are placed in, so every app offers the same step and the same words";
  arguments_assert(arguments, 2);
  let factor = app_shared_font_size_factor();
  let value_get_multiply = multiply_curried_right(factor);
  let value_get_divide = divide_curried_right(factor);
  let div = html_div(parent);
  let c = app_shared_font_size_adjust_curried(context);
  async function lambda2() {
    await c(value_get_multiply);
  }
  let text = app_shared_font_size_larger_text();
  app_shared_button(div, text, lambda2);
  async function lambda3() {
    await c(value_get_divide);
  }
  let text2 = app_shared_font_size_smaller_text();
  app_shared_button(div, text2, lambda3);
}
