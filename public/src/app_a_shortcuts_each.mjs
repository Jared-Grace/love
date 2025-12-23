import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_shortcuts_each(on_choice, choices) {
  function lambda21(c) {
    let shortcut = object_property_get(c, "shortcut");
    let text = object_property_get(c, "text");
    let fn = object_property_get(c, "fn");
    let b = on_choice(shortcut, text, fn);
  }
  each(choices, lambda21);
}
