import { function_name_parts_swap_at } from "./function_name_parts_swap_at.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
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
