import { list_map_property_get } from "./list_map_property_get.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { function_list_names_to_paths } from "./function_list_names_to_paths.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { data_identifiers_exist_assert } from "./data_identifiers_exist_assert.mjs";
export async function data_identifiers_search_generic(fn, ids_comma) {
  text_is_assert_json(ids_comma, {
    hint: "the comma-separated identifiers should be text — did an empty or non-text value arrive?",
    ids_comma,
  });
  let identifiers = await fn();
  let ids_split = text_split_comma_dot(ids_comma);
  let ids = list_map(ids_split, text_trim);
  data_identifiers_exist_assert(identifiers, ids);
  let mapped = list_map_property_get(ids, identifiers);
  let i = list_intersect_multiple(mapped);
  let result = await function_list_names_to_paths(i);
  return result;
}
