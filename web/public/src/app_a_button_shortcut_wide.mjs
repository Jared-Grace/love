import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
export function app_a_button_shortcut_wide(parent, shortcut, text, fn) {
  marker("1");
  let b2 = app_a_button(parent, "(" + shortcut + ") " + text, fn);
  return b2;
}
