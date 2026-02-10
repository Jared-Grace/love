import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_a_shortcuts_each(choices, on_choice) {
  function on_each(c) {
    let shortcut = property_get(c, "shortcut");
    let text = property_get(c, "text");
    let fn = property_get(c, "fn");
    let b = on_choice(shortcut, text, fn);
  }
  each(choices, on_each);
}
