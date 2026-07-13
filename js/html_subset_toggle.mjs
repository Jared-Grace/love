import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove_property } from "./list_remove_property.mjs";
import { html_button_toggle } from "./html_button_toggle.mjs";
export function html_subset_toggle(
  parent,
  options,
  chosen,
  name_property,
  key_property,
  changed,
) {
  function lambda(option) {
    let name = property_get(option, name_property);
    let key = property_get(option, key_property);
    let found = list_find_property_or_null(chosen, key_property, key);
    let on = null_not_is(found);
    function on_click() {
      if (on) {
        list_remove_property(chosen, key_property, key);
      } else {
        list_add(chosen, option);
      }
      changed();
    }
    let button = html_button_toggle(parent, name, on, on_click);
    return button;
  }
  let buttons = list_map(options, lambda);
  return buttons;
}
