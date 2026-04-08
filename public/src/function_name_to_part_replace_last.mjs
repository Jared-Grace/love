import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function function_name_to_part_replace_last(f_name_old, replacement) {
  let parts2 = function_name_to_parts(f_name_old);
  list_pop(parts2);
  let parts = parts2;
  list_add(parts, replacement);
  let f_name_new = function_name_combine_multiple(parts);
  return f_name_new;
}
