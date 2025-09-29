import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_to_acronym(f_name) {
  let parts = function_name_to_parts(f_name);
  ("if this error, then maybe string empty, __ instead of _ or ends with _");
  let letters = list_map(parts, list_first);
  let acronym = list_join_empty(letters);
  return acronym;
}
