import { function_name_separator } from "./function_name_separator.mjs";
import { list_join } from "./list_join.mjs";
export function function_name_combine_multiple() {
  let separator = function_name_separator();
  const combined = list_join(parts, separator);
  return combined;
}
