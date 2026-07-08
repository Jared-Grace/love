import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
export function function_name_part_last_delete_2(f_name_old) {
  let size = list_size(list);
  let parts2 = function_name_to_parts(f_name_old);
  list_pop(parts2);
  let parts = parts2;
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
