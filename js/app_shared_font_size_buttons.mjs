import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_factor } from "./app_shared_font_size_factor.mjs";
import { multiply_curried_right } from "./multiply_curried_right.mjs";
import { divide_curried_right } from "./divide_curried_right.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_font_size_adjust_curried } from "./app_shared_font_size_adjust_curried.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_font_larger } from "./emoji_font_larger.mjs";
import { emoji_font_smaller } from "./emoji_font_smaller.mjs";
export async function app_shared_font_size_buttons(root, context) {
  arguments_assert(arguments, 2);
  let factor = app_shared_font_size_factor();
  let value_get_multiply = multiply_curried_right(factor);
  let value_get_divide = divide_curried_right(factor);
  let div = html_div(root);
  let c = app_shared_font_size_adjust_curried(context);
  async function lambda2() {
    await c(value_get_multiply);
  }
  app_shared_button(
    div,
    text_combine(emoji_font_larger(), " Font size larger"),
    lambda2,
  );
  async function lambda3() {
    await c(value_get_divide);
  }
  app_shared_button(
    div,
    text_combine(emoji_font_smaller(), " Font size smaller"),
    lambda3,
  );
}
