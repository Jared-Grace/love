import { change_if_equal_curried_right_2 } from "./change_if_equal_curried_right_2.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
export function function_name_part_replace(f_name, from, to) {
  let parts = function_name_to_parts(f_name);
  let r = change_if_equal_curried_right_2(from, to);
  let mapped = list_map(parts, r);
  let combined = function_name_combine_multiple(mapped);
  return combined;
}
