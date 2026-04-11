import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { text_split_comma_dot_map_unordered } from "../../../love/public/src/text_split_comma_dot_map_unordered.mjs";
export async function function_aliases_to_names(ids_comma) {
  let mapped = await text_split_comma_dot_map_unordered(
    ids_comma,
    function_name_unalias_only,
  );
  let names = list_join_comma(mapped);
  return names;
}
