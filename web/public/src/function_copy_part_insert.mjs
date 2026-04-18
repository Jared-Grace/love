import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
import { function_name_part_insert } from "../../../love/public/src/function_name_part_insert.mjs";
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
  await function_copy_open(f_name_before, f_name_after);
  return v;
}
