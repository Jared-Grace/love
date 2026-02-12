import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
export function function_name_part_insert_at(
  f_name_before,
  index_string,
  part,
) {
  let index = integer_to(index_string);
  let parts = function_name_to_parts(f_name_before);
  list_insert(parts, index, part);
  let f_name_after = function_name_combine_multiple(parts);
  return f_name_after;
}
