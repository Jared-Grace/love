import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { function_list_names_to_paths } from "./function_list_names_to_paths.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_curried } from "./property_get_curried.mjs";
export async function data_identifiers_search_generic(fn, ids_comma) {
  text_is_assert_json(ids_comma, {
    hint: "the comma-separated identifiers should be text — did an empty or non-text value arrive?",
    ids_comma,
  });
  let identifiers = await fn();
  let ids = text_split_comma_dot(ids_comma);
  let r = property_get_curried(identifiers);
  let mapped = list_map(ids, r);
  let i = list_intersect_multiple(mapped);
  let result = await function_list_names_to_paths(i);
  return result;
}
