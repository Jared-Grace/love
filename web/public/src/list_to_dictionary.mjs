import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_dictionary(list) {
  let dictionary = {};
  function lambda(item) {
    object_property_set(object, property_name, value);
  }
  each(list, lambda);
}
