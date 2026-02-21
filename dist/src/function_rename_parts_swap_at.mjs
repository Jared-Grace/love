import { function_name_parts_swap_at } from "../../../love/public/src/function_name_parts_swap_at.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_parts_swap_at(
  f_name_before,
  index_a,
  index_b,
) {
  arguments_assert(arguments, 3);
  let f_name_after = function_name_parts_swap_at(
    f_name_before,
    index_a,
    index_b,
  );
  await function_rename_open(f_name_before, f_name_after);
}
