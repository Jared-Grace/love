import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_parts_remove(f_name_old, removals) {
  let parts = function_name_to_parts(f_name_old);
  let difference = list_difference(parts, removals);
  let f_name_new = function_name_combine_multiple(difference);
  return f_name_new;
}
