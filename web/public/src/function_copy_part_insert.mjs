import { text_index_of } from "../../../love/public/src/text_index_of.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_rename_part_insert_at } from "../../../love/public/src/function_rename_part_insert_at.mjs";
export async function function_copy_part_insert(
  f_name_before,
  part_insert,
  part_new,
) {
  let parts = function_name_to_parts(f_name_before);
  let index = text_index_of(parts, part_insert);
  let v = await function_rename_part_insert_at(f_name_before, index, part_new);
  return v;
}
