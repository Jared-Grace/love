import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
export function function_name_combine_multiple(parts) {
  let separator = function_name_separator();
  const combined = list_join(parts, separator);
  return combined;
}
