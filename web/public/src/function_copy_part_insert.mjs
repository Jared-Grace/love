import { function_name_part_index } from "../../../love/public/src/function_name_part_index.mjs";
import { function_rename_part_insert_at } from "../../../love/public/src/function_rename_part_insert_at.mjs";
export async function function_copy_part_insert(
  f_name_before,
  part_insert,
  part_new,
) {
  let index = function_name_part_index(f_name_before, part_insert);
  let v = await function_rename_part_insert_at(f_name_before, index, part_new);
  return v;
}
