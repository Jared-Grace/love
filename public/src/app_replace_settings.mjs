import { app_replace_font_size_adjust_curried } from "../../../love/public/src/app_replace_font_size_adjust_curried.mjs";
import { multiply_curried_right } from "../../../love/public/src/multiply_curried_right.mjs";
import { divide_curried_right } from "../../../love/public/src/divide_curried_right.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { html_button_screen } from "../../../love/public/src/html_button_screen.mjs";
import { app_replace_font_size_factor } from "../../../love/public/src/app_replace_font_size_factor.mjs";
import { emoji_font_smaller } from "../../../love/public/src/emoji_font_smaller.mjs";
import { emoji_font_larger } from "../../../love/public/src/emoji_font_larger.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_replace_settings(context) {
  let root = property_get(context, "root");
  html_button_screen(root, emoji_home() + " Home", context, app_replace_home);
  const factor = app_replace_font_size_factor();
  let value_get_multiply = multiply_curried_right(factor);
  let value_get_divide = divide_curried_right(factor);
  let c = app_replace_font_size_adjust_curried(context);
  async function lambda2() {
    await c(value_get_multiply);
  }
  html_button(root, emoji_font_larger() + " Font size larger", lambda2);
  async function lambda3() {
    await c(value_get_divide);
  }
  let component = html_button(
    root,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
}
