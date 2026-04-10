import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { text_split_dot_comma } from "../../../love/public/src/text_split_dot_comma.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_multiple(ids_comma) {
  let ids = text_split_dot_comma(ids_comma);
  let waited = await list_map_unordered_async(ids, data_identifiers_search);
  let properties = properties_get(obj);
  function lambda(item) {}
  let mapped = list_map(list2, lambda);
  let i = list_intersect_multiple(list);
  return r;
}
