import { log } from "../../../love/public/src/log.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_unalias(ids_comma) {
  let split = text_split_comma_dot(ids_comma);
  let mapped = list_map(split, function_name_unalias_only);
  let result = list_join_comma(mapped);
  log(data_identifiers_search_unalias.name, {
    result,
  });
  let r = await data_identifiers_search(result);
  return r;
}
