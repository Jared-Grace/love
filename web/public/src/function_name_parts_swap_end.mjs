import { function_name_parts_transform } from "../../../love/public/src/function_name_parts_transform.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_swap_end } from "../../../love/public/src/list_swap_end.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_parts_swap_end(f_name_before) {
  function lambda(parts) {}
  let transformed = function_name_parts_transform(before, lambda);
  let list = function_name_to_parts(f_name_before);
  list_swap_end(list);
  let f_name_after = function_name_combine_multiple(list);
  return f_name_after;
}
