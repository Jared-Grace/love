import { list_first } from "../../../love/public/src/list_first.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_to_part_first_2(f_name_before) {
  let parts = function_name_to_parts(f_name_before);
  let last = list_first(parts);
  return last;
}
