import { log } from "../../../love/public/src/log.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { change_if_equal_curried_right } from "../../../love/public/src/change_if_equal_curried_right.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_part_replace(f_name, from, to) {
  let parts = function_name_to_parts(f_name);
  let r = change_if_equal_curried_right(from, to);
  let mapped = list_map(parts, r);
  let combined = function_name_combine_multiple(mapped);
  log({
    combined,
  });
  return combined;
}
