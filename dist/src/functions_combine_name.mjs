import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export async function functions_combine_name(f_names_comma) {
  let split = text_split_comma(f_names_comma);
  let results = await list_map_unordered_async(split, function_name_unalias);
  let f_names = list_map_property(results, "unaliased");
  let combined = function_name_combine_multiple(f_names);
  let result = {
    f_names,
    combined,
  };
  return result;
}
