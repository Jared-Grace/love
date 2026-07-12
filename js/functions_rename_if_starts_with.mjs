import { text_prefix_change_curried_right_2 } from "./text_prefix_change_curried_right_2.mjs";
import { functions_rename_generic_starts_with } from "./functions_rename_generic_starts_with.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_rename_if_starts_with(
  f_name_prefix_before,
  f_name_prefix_after,
) {
  arguments_assert(arguments, 2);
  let curried = text_prefix_change_curried_right_2(
    f_name_prefix_before,
    f_name_prefix_after,
  );
  await functions_rename_generic_starts_with(curried, f_name_prefix_before);
}
