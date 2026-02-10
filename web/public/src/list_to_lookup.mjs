import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { list_to_dictionary } from "../../../love/public/src/list_to_dictionary.mjs";
export function list_to_lookup(list, property_key) {
  "if each key has one value, then " +
    list_to_dictionary.name +
    " but if each key corresponds to a list of values, then " +
    list_to_lookup.name;
  let lookup = {};
  function lambda(item) {
    let n = property_exists_not(item, property_key);
    if (n) {
      return;
    }
    let value = property_get(item, property_key);
    let key_list = object_property_initialize_list(lookup, value);
    list_add(key_list, item);
  }
  each(list, lambda);
  return lookup;
}
