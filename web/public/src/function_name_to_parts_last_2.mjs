import { function_name_parts_transform } from "../../../love/public/src/function_name_parts_transform.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_to_parts_last_2(f_name_before) {
  let transformed = function_name_parts_transform(
    before,
    function lambda(parts2) {},
  );
  let parts = function_name_to_parts(f_name_before);
  let result = list_slice_end(parts, 2);
  let from = function_name_combine_multiple(result);
  return from;
}
