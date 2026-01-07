import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_a_button_shortcut } from "../../../love/public/src/app_a_button_shortcut.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_button_shortcut_wide(parent, shortcut, text, fn) {
  marker("1");
  let b2 = app_a_button_shortcut(parent, shortcut, text, fn);
  html_width_full(component);
  return b2;
}
