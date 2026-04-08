import { function_name_to_parts_last_delete } from "../../../love/public/src/function_name_to_parts_last_delete.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
export function function_name_part_last_delete(f_name_old) {
  let parts = function_name_to_parts_last_delete(f_name_old);
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
