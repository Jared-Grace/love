import { emoji_font_smaller } from "./emoji_font_smaller.mjs";
import { emoji_font_larger } from "./emoji_font_larger.mjs";
import { html_button } from "./html_button.mjs";
import { marker } from "./marker.mjs";
export function app_replace_settings(context) {
  marker("1");
  function lambda2() {}
  html_button(root, emoji_font_larger() + " Font size larger", lambda2);
  function lambda3() {}
  let component = html_button(
    parent,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
}
