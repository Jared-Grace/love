import { function_name_parts_swap_at } from "../../../love/public/src/function_name_parts_swap_at.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function function_rename_parts_swap_at(
  f_name_before,
  part_a,
  part_b,
) {
  assert_arguments(arguments, 3);
  let f_name_after = function_name_parts_swap_at(f_name_before, part_a, part_b);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
