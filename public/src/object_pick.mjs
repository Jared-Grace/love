import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
export function object_pick(object, property_names) {
  let c = property_get_curried(object);
  let picked = list_to_dictionary_value(property_names, c);
  return picked;
}
