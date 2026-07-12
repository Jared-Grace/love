import { list_join_comma } from "./list_join_comma.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { text_split_comma_dot_map_unordered } from "./text_split_comma_dot_map_unordered.mjs";
export async function function_aliases_to_names(aliases_comma) {
  let mapped = await text_split_comma_dot_map_unordered(
    aliases_comma,
    function_name_unalias_only,
  );
  let names = list_join_comma(mapped);
  return names;
}
