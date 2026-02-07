import { list_last } from "../../../love/public/src/list_last.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_to_part_first(f_name_before) {
  let parts = function_name_to_parts(f_name_before);
  let last = list_last(parts);
  return last;
}
