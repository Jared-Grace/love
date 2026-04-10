import { list_to_dictionary_from_object } from "../../../love/public/src/list_to_dictionary_from_object.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function object_intersect_multiple(waited) {
  let mapped = list_map(waited, properties_get);
  let i = list_intersect_multiple(mapped);
  let first = list_first(waited);
  let dictionary = list_to_dictionary_from_object(i, first);
  return dictionary;
}
