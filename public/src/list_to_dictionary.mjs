import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_dictionary(list, lambda$item) {
  let dictionary = {};
  function lambda(item) {
    let value = lambda$item(item);
    object_property_set(dictionary, item, value);
  }
  each(list, lambda);
  return dictionary;
}
