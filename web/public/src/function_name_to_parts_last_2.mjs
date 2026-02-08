import { function_name_to_parts_last_generic } from "../../../love/public/src/function_name_to_parts_last_generic.mjs";
export function function_name_to_parts_last_2(f_name_before) {
  let count = 2;
  let f_name_after = function_name_to_parts_last_generic(count, f_name_before);
  return f_name_after;
}
