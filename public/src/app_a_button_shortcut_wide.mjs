import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_a_button_shortcut } from "../../../love/public/src/app_a_button_shortcut.mjs";
export function app_a_button_shortcut_wide(parent, shortcut, text, fn) {
  let b2 = app_a_button_shortcut(parent, shortcut, text, fn);
  html_width_full(b2);
  return b2;
}
