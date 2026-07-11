import { function_name_to_parts_last_generic } from "../../../love/public/src/function_name_to_parts_last_generic.mjs";
export function function_name_to_parts_last_3(f_name_before) {
  let count = 3;
  let f_name_after = function_name_to_parts_last_generic(f_name_before, count);
  return f_name_after;
}
