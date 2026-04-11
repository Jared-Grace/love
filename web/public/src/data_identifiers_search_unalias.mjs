import { text_split_comma_dot_map_unordered } from "../../../love/public/src/text_split_comma_dot_map_unordered.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_unalias(ids_comma) {
  let mapped = await text_split_comma_dot_map_unordered(
    ids_comma,
    function_name_unalias_only,
  );
  let result = list_join_comma(mapped);
  let r = await data_identifiers_search(result);
  return r;
}
