import { list_join_empty } from "./list_join_empty.mjs";
import { string_empty } from "./string_empty.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { string_split } from "./string_split.mjs";
import { list_join } from "./list_join.mjs";
export function function_name_to_acronym(f_name) {
  let parts = function_name_to_parts(f_name);
  let letters = list_map(parts, list_first);
  let joined = list_join_empty(letters);
  return joined;
}
