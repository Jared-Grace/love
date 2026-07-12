import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function list_to_lookup(list, property_key) {
  text_combine_multiple([
    "if each key has one value, then ",
    list_to_dictionary.name,
    " but if each key corresponds to a list of values, then ",
    list_to_lookup.name,
  ]);
  let lookup = {};
  function lambda(item) {
    let n = property_exists_not(item, property_key);
    if (n) {
      return;
    }
    let value = property_get(item, property_key);
    let key_list = property_initialize_list(lookup, value);
    list_add(key_list, item);
  }
  each(list, lambda);
  return lookup;
}
