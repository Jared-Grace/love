import { list_pop } from "./list_pop.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
export function function_name_to_parts_last_delete(f_name_old) {
  let parts = function_name_to_parts(f_name_old);
  list_pop(parts);
  return parts;
}
