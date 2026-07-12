import { function_name_parts_transform } from "./function_name_parts_transform.mjs";
import { list_replace_all } from "./list_replace_all.mjs";
import { list_slice_end } from "./list_slice_end.mjs";
export function function_name_to_parts_last_generic(f_name_before, count) {
  function lambda(parts) {
    let result = list_slice_end(parts, count);
    list_replace_all(parts, result);
  }
  let f_name_after = function_name_parts_transform(f_name_before, lambda);
  return f_name_after;
}
