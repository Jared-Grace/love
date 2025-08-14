import { string_split } from "./string_split.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
export function function_name_to_parts(f_name) {
  let separator = function_name_separator();
  let parts = string_split(f_name, separator);
  return parts;
}
