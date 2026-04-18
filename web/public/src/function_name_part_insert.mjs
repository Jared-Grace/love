import { function_name_part_insert_at } from "../../../love/public/src/function_name_part_insert_at.mjs";
export function function_name_part_insert(f_name_before, index_string, part) {
  let f_name_after = function_name_part_insert_at(
    f_name_before,
    index_string,
    part,
  );
  return f_name_after;
}
