import { app_a_button_shortcut } from "./app_a_button_shortcut.mjs";
import { app_a_shortcuts_each } from "./app_a_shortcuts_each.mjs";
export function app_a_buttons_shortcuts(parent, choices) {
  app_a_shortcuts_each(choices, on_choice);
  function on_choice(shortcut, text, fn) {
    let b = app_a_button_shortcut(parent, shortcut, text, fn);
    return b;
  }
}
