import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { string_split } from "./string_split.mjs";
export function function_name_to_acronym(f_name) {
  let parts = function_name_to_parts();
  let result = list_map(parts, list_first);
  return result;
}
