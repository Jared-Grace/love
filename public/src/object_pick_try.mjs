import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export function object_pick_try(object, property_names) {
  let c = property_get_try_curried(object);
  let picked = list_to_dictionary_value(property_names, c);
  return picked;
}
