import { text_prefix_change_curried_right_2 } from "../../../love/public/src/text_prefix_change_curried_right_2.mjs";
import { functions_rename_generic_starts_with } from "../../../love/public/src/functions_rename_generic_starts_with.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function functions_rename_if_starts_with(
  f_name_prefix_before,
  f_name_prefix_after,
) {
  assert_arguments(arguments, 2);
  let curried = text_prefix_change_curried_right_2(
    f_name_prefix_before,
    f_name_prefix_after,
  );
  await functions_rename_generic_starts_with(curried, f_name_prefix_before);
}
