import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { function_list_names_to_paths } from "../../../love/public/src/function_list_names_to_paths.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
export async function data_identifiers_search_generic(fn, ids_comma) {
  text_is_assert(value);
  let identifiers = await fn();
  let ids = text_split_comma_dot(ids_comma);
  let r3 = property_get_curried(identifiers);
  let mapped = list_map(ids, r3);
  let i = list_intersect_multiple(mapped);
  let result = await function_list_names_to_paths(i);
  return result;
}
