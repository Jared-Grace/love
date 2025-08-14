import { function_name_separator } from "./function_name_separator.mjs";
import { string_split } from "./string_split.mjs";
export function function_name_to_acronym(f_name) {
  let separator = function_name_separator();
  let parts = string_split(s, separator);
  return parts;
}
