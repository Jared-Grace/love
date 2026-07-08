import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_remove_end } from "../../../love/public/src/list_remove_end.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_part_last_delete_n(f_name_old, count) {
  let parts = function_name_to_parts(f_name_old);
  let removed = list_remove_end(parts, count);
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
