import { list_remove_last_multiple } from "../../../love/public/src/list_remove_last_multiple.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_to_parts_remove_last_multiple(f_name_old, count) {
  let parts = function_name_to_parts(f_name_old);
  let e = list_remove_last_multiple(parts, count);
  return parts;
}
