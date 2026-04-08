import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_part_last_delete(f_name_old) {
  let parts = function_name_to_parts(f_name_old);
  let popped = list_pop(parts);
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
