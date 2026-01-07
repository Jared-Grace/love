import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_button_shortcut } from "../../../love/public/src/app_a_button_shortcut.mjs";
import { app_a_shortcuts_each } from "../../../love/public/src/app_a_shortcuts_each.mjs";
export function app_a_buttons_shortcuts(parent, choices) {
  marker("1");
  app_a_shortcuts_each(choices, on_choice);
  function on_choice(shortcut, text, fn) {
    let b3 = app_a_button_shortcut(parent, shortcut, text, fn);
    return b3;
  }
}
