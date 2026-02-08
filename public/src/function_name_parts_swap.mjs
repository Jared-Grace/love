import { function_name_parts_transform } from "../../../love/public/src/function_name_parts_transform.mjs";
import { list_swap } from "../../../love/public/src/list_swap.mjs";
export function function_name_parts_swap(f_name_before, part_a, part_b) {
  function lambda(parts) {
    list_swap(parts, part_a, part_b);
  }
  let f_name_after = function_name_parts_transform(f_name_before, lambda);
  return f_name_after;
}
