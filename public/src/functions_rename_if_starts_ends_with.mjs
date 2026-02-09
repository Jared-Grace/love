import { text_starts_ends_with_curry_right } from "../../../love/public/src/text_starts_ends_with_curry_right.mjs";
import { text_suffix_change } from "../../../love/public/src/text_suffix_change.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function functions_rename_if_starts_ends_with(
  f_name_prefix,
  f_name_suffix_before,
  f_name_suffix_after,
) {
  assert_arguments(arguments, 3);
  let filter = text_starts_ends_with_curry_right(
    f_name_prefix,
    f_name_suffix_before,
  );
  await functions_rename_generic(filter, name_change);
  function name_change(f_name_before) {
    let together2 = text_suffix_change(
      f_name_before,
      f_name_suffix_before,
      f_name_suffix_after,
    );
    return together2;
  }
}
