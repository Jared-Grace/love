import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export function object_pick_try(object, property_names) {
  let properties = properties_get(object);
  let r = list_intersect(properties, property_names);
  let c = property_get_try_curried(object);
  let picked = list_to_dictionary_value(r, c);
  return picked;
}
