import { list_to_dictionary_property } from "../../../love/public/src/list_to_dictionary_property.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { app_a_shortcuts_each } from "../../../love/public/src/app_a_shortcuts_each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_on_keydown_stop_logic } from "../../../love/public/src/html_on_keydown_stop_logic.mjs";
export function app_a_on_keydown(e, choices) {
  "this makes sure there is at most one choice per shortcut";
  list_to_dictionary_property(choices, "shortcut");
  html_on_keydown_stop_logic(e);
  let key = property_get(e, "key");
  app_a_shortcuts_each(choices, on_choice);
  function on_choice(shortcut, text, fn) {
    if (equal(key, shortcut)) {
      fn();
    }
  }
}
