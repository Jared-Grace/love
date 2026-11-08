import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { data_identifiers_exist_assert } from "./data_identifiers_exist_assert.mjs";
import { list_map_property_get } from "./list_map_property_get.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
export async function data_identifiers_search_generic_names(fn, ids_comma) {
  "The names of the functions that mention all of the named identifiers at once, as the gathered record fn hands back has them - without asking where each one lives, so a function deleted since the record was gathered is still named rather than failing the lookup.";
  text_is_assert_json(ids_comma, {
    hint: "the comma-separated identifiers should be text — did an empty or non-text value arrive?",
    ids_comma,
  });
  let identifiers = await fn();
  let ids = text_split_comma_dot_trim(ids_comma);
  data_identifiers_exist_assert(identifiers, ids);
  let mapped = list_map_property_get(ids, identifiers);
  let i = list_intersect_multiple(mapped);
  return i;
}
