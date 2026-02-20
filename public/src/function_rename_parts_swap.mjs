import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_name_parts_swap } from "../../../love/public/src/function_name_parts_swap.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_parts_swap(
  f_name_before,
  part_a,
  part_b,
) {
  arguments_assert(arguments, 3);
  let f_name_after = function_name_parts_swap(f_name_before, part_a, part_b);
  let v = await function_rename_open(f_name_before, f_name_after);
  return v;
}
