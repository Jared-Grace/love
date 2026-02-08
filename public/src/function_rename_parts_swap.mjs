import { function_name_parts_swap } from "../../../love/public/src/function_name_parts_swap.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function function_rename_parts_swap(
  f_name_before,
  part_a,
  part_b,
) {
  let f_name_after = function_name_parts_swap(part_a, part_b, f_name_before);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
