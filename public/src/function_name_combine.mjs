import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
export function function_name_combine(left, right) {
  const combined = function_name_combine_multiple([left, right]);
  return combined;
}
