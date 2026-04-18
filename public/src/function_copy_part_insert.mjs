import { function_name_part_insert } from "../../../love/public/src/function_name_part_insert.mjs";
import { function_copy_part_insert_at } from "../../../love/public/src/function_copy_part_insert_at.mjs";
export async function function_copy_part_insert(
  f_name_before,
  part_insert,
  part_new,
) {
  let f_name_after = function_name_part_insert(
    f_name_before,
    part_insert,
    part_new,
  );
  let v = await function_copy_part_insert_at(f_name_before, index, part_new);
  return v;
}
