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
    let value = app_replace_font_size(context);
    value *= 1.1;
    app_replace_font_size_refresh(context);
  }
  html_button(root, emoji_font_larger() + " Font size larger", lambda2);
  function lambda3() {
    let value = app_replace_font_size(context);
    value *= 1 / 1.1;
    storage_local_set_context(context2, key, value2);
    app_replace_font_size_refresh(context);
  }
  let component = html_button(
    parent,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
}
