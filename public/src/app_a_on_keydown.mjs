import { equal } from "../../../love/public/src/equal.mjs";
import { app_a_shortcuts_each } from "../../../love/public/src/app_a_shortcuts_each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_on_keydown_stop_logic } from "../../../love/public/src/html_on_keydown_stop_logic.mjs";
export function app_a_on_keydown(e, choices) {
  html_on_keydown_stop_logic(e);
  let key = object_property_get(e, "key");
  app_a_shortcuts_each(choices, on_choice);
  function on_choice(shortcut, text, fn) {
    if (equal(key, shortcut)) {
      fn();
    }
  }
}
