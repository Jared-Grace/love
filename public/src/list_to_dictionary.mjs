import { list_get } from "./list_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_dictionary(list) {
  let dictionary = {};
  function lambda(item) {
    let result = list_get(list2, index);
    object_property_set(dictionary, item, value);
  }
  each(list, lambda);
}
