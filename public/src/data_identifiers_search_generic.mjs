import { functions_names_paths_getter } from "../../../love/public/src/functions_names_paths_getter.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { text_split_dot_comma } from "../../../love/public/src/text_split_dot_comma.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export async function data_identifiers_search_generic(fn, ids_comma) {
  let identifiers = await fn();
  let ids = text_split_dot_comma(ids_comma);
  let r3 = property_get_curried(identifiers);
  let mapped = list_map(ids, r3);
  let i = list_intersect_multiple(mapped);
  let result = await functions_names_to_paths(i);
  return result;
}
async function functions_names_to_paths(i) {
  let r2 = await functions_names_paths_getter();
  let result = list_to_dictionary_value(i, r2);
  return result;
}

