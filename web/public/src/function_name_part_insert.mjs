import { function_name_part_index } from "../../../love/public/src/function_name_part_index.mjs";
import { function_name_part_insert_at } from "../../../love/public/src/function_name_part_insert_at.mjs";
export function function_name_part_insert(f_name_before, part_insert, part) {
  let index = function_name_part_index(f_name_before, part_insert);
  let f_name_after = function_name_part_insert_at(f_name_before, index, part);
  return f_name_after;
}
