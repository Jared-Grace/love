import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
export function app_a_button_shortcut(overlay, shortcut, text, fn) {
  let b2 = app_a_button(overlay, "(" + shortcut + ") " + text, fn);
  return b2;
}
