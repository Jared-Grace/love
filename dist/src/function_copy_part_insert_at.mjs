import { function_name_part_insert_at } from "../../../love/public/src/function_name_part_insert_at.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
export async function function_copy_part_insert_at(
  f_name_before,
  index_string,
  part,
) {
  let f_name_after = function_name_part_insert_at(
    f_name_before,
    index_string,
    part,
  );
  await function_copy_open(f_name_before, f_name_after);
}
