import { ternary } from "../../../love/public/src/ternary.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_part_replace(f_name, from, to) {
  let parts = function_name_to_parts(f_name);
  function lambda(item) {
    let result = ternary(condition, on_true, on_false);
  }
  let mapped = list_map(parts, lambda);
}
