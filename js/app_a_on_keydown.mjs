import { list_to_dictionary_property } from "./list_to_dictionary_property.mjs";
import { equal } from "./equal.mjs";
import { app_a_shortcuts_each } from "./app_a_shortcuts_each.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_keydown_stop_logic } from "./html_on_keydown_stop_logic.mjs";
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
