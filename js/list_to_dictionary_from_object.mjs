import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { property_get_curried } from "./property_get_curried.mjs";
export function list_to_dictionary_from_object(list, object) {
  let r = property_get_curried(object);
  let dictionary = list_to_dictionary_value(list, r);
  return dictionary;
}
