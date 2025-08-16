import { log } from "./log.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function functions_combine_name(f_names_comma) {
  let split = string_split_comma(f_names_comma);
  let f_names = await list_map_unordered_async(split, function_name_unalias);
  log(f_names);
  let combined = function_name_combine_multiple(f_names);
  let v = {
    f_names,
    combined,
  };
  return v;
}
