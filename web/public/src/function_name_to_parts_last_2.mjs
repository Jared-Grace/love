import { list_replace_all } from "../../../love/public/src/list_replace_all.mjs";
import { function_name_parts_transform } from "../../../love/public/src/function_name_parts_transform.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
export function function_name_to_parts_last_2(f_name_before) {
  let count = 2;
  function lambda(parts) {
    let result = list_slice_end(parts, 2);
    list_replace_all(parts, result);
  }
  let f_name_after = function_name_parts_transform(f_name_before, lambda);
  return f_name_after;
}
