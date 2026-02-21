import { text_index_of } from "../../../love/public/src/text_index_of.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_part_index(f_name_before, part_insert) {
  let parts = function_name_to_parts(f_name_before);
  let index = text_index_of(parts, part_insert);
  return index;
}
