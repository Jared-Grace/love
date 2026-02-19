import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { ternary_equal_curried_right } from "../../../love/public/src/ternary_equal_curried_right.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_part_replace(f_name, from, to) {
  let parts = function_name_to_parts(f_name);
  let r = ternary_equal_curried_right(from, to);
  let mapped = list_map(parts, r);
  let combined = function_name_combine_multiple(mapped);
  return combined;
}
