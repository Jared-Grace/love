import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
export function function_name_part_last_delete_2(f_name_old) {
  let count = 2;
  let parts = function_name_to_parts(f_name_old);
  let size = list_size(parts);
  list_pop(parts);
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
