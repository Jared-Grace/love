import { function_name_parts_transform } from "./function_name_parts_transform.mjs";
import { list_swap_end } from "./list_swap_end.mjs";
export function function_name_parts_swap_end(f_name_before) {
  function lambda(parts) {
    list_swap_end(parts);
  }
  let f_name_after = function_name_parts_transform(f_name_before, lambda);
  return f_name_after;
}
