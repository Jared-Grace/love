import { emoji_gear } from "./emoji_gear.mjs";
import { html_button } from "./html_button.mjs";
import { marker } from "./marker.mjs";
export function app_replace_settings(context) {
  marker("1");
  html_button(root, emoji_gear() + " Font size larger", lambda4);
}
