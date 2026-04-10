import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
export function list_to_dictionary_from_object(first, list) {
  let r2 = property_get_curried(first);
  let dictionary = list_to_dictionary_value(list, r2);
  return dictionary;
}
