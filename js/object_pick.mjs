import { list_unique_is_assert } from "./list_unique_is_assert.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { property_get_curried } from "./property_get_curried.mjs";
export function object_pick(object, property_names) {
  list_unique_is_assert(property_names);
  let c = property_get_curried(object);
  let picked = list_to_dictionary_value(property_names, c);
  return picked;
}
