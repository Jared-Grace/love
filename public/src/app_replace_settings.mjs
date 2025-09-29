import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { html_button_screen } from "../../../love/public/src/html_button_screen.mjs";
import { app_replace_font_size_adjust } from "../../../love/public/src/app_replace_font_size_adjust.mjs";
import { app_replace_font_size_factor } from "../../../love/public/src/app_replace_font_size_factor.mjs";
import { emoji_font_smaller } from "../../../love/public/src/emoji_font_smaller.mjs";
import { emoji_font_larger } from "../../../love/public/src/emoji_font_larger.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_replace_settings(context) {
  marker("1");
  let { root } = context;
  html_button_screen(root, emoji_home() + "Home", context, "home");
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
    root,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
}
