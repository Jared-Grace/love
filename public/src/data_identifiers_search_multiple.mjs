import { list_to_dictionary_from_object } from "../../../love/public/src/list_to_dictionary_from_object.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { text_split_dot_comma } from "../../../love/public/src/text_split_dot_comma.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_multiple(ids_comma) {
  let ids = text_split_dot_comma(ids_comma);
  let waited = await list_map_unordered_async(ids, data_identifiers_search);
  let mapped = list_map(waited, properties_get);
  let i = list_intersect_multiple(mapped);
  let first = list_first(waited);
  let dictionary = list_to_dictionary_from_object(first, i);
  return dictionary;
}
