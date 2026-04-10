import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { text_split_dot_comma } from "../../../love/public/src/text_split_dot_comma.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_multiple(ids_comma) {
  let ids = text_split_dot_comma(ids_comma);
  let waited = await list_map_unordered_async(ids, data_identifiers_search);
  let r = await data_identifiers_search(ids_comma);
  return r;
}
