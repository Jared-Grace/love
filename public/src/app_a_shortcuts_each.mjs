import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_shortcuts_each(choices, on_choice) {
  marker("1");
  function lambda21(c) {
    let shortcut = object_property_get(c, "shortcut");
    let text = object_property_get(c, "text");
    let fn = object_property_get(c, "fn");
    let b = on_choice(shortcut, text, fn);
  }
  each(choices, lambda21);
}
