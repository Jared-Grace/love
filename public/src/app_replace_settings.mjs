import { app_replace_font_size_adjust } from "./app_replace_font_size_adjust.mjs";
import { app_replace_font_size_factor } from "./app_replace_font_size_factor.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_replace_font_size } from "./app_replace_font_size.mjs";
import { app_replace_font_size_refresh } from "./app_replace_font_size_refresh.mjs";
import { emoji_font_smaller } from "./emoji_font_smaller.mjs";
import { emoji_font_larger } from "./emoji_font_larger.mjs";
import { html_button } from "./html_button.mjs";
import { marker } from "./marker.mjs";
export function app_replace_settings(context) {
  marker("1");
  function lambda2() {
    function value_get(value) {
      const factor = app_replace_font_size_factor();
      value *= factor;
      return value;
    }
    app_replace_font_size_adjust(context, value_get);
  }
  html_button(root, emoji_font_larger() + " Font size larger", lambda2);
  function lambda3() {
    let value = app_replace_font_size(context);
    value *= 1 / app_replace_font_size_factor();
    storage_local_set_context(context, "font_size", value);
    app_replace_font_size_refresh(context);
    app_replace_font_size_adjust(context, factor);
  }
  let component = html_button(
    parent,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
}
