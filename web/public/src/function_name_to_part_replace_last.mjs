import { function_name_to_parts_remove_last_multiple } from "../../../love/public/src/function_name_to_parts_remove_last_multiple.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function function_name_to_part_replace_last(f_name_old, replacement) {
  let count = 1;
  let parts = function_name_to_parts_remove_last_multiple(f_name_old, count);
  list_add(parts, replacement);
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
