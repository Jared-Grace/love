import { list_join_empty } from "./list_join_empty.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
export function function_name_to_acronym(f_name) {
  let parts = function_name_to_parts(f_name);
  let letters = list_map(parts, list_first);
  let acronym = list_join_empty(letters);
  return acronym;
}
