import { app_replace_font_size_adjust } from "./app_replace_font_size_adjust.mjs";
import { app_replace_font_size_factor } from "./app_replace_font_size_factor.mjs";
import { emoji_font_smaller } from "./emoji_font_smaller.mjs";
import { emoji_font_larger } from "./emoji_font_larger.mjs";
import { html_button } from "./html_button.mjs";
import { marker } from "./marker.mjs";
export function app_replace_settings(context) {
  marker("1");
  let { root } = context;
  function lambda2() {
    const factor = app_replace_font_size_factor();
    function value_get(value) {
      value *= factor;
      return value;
    }
    app_replace_font_size_adjust(context, value_get);
  }
  html_button(root, emoji_font_larger() + " Font size larger", lambda2);
  function lambda3() {
    const factor = app_replace_font_size_factor();
    function value_get(value) {
      value /= factor;
      return value;
    }
    app_replace_font_size_adjust(context, value_get);
  }
  let component = html_button(
    parent,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
}
