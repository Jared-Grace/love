import { function_multiple_rename_if_starts_ends_with } from "../../../love/public/src/function_multiple_rename_if_starts_ends_with.mjs";
import { text_is_assert_multiple } from "../../../love/public/src/text_is_assert_multiple.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { text_starts_ends_with } from "../../../love/public/src/text_starts_ends_with.mjs";
export function text_starts_ends_with_curry_right(
  f_name_prefix,
  f_name_suffix_before,
) {
  "asserts in this fn are to make sure " +
    function_multiple_rename_if_starts_ends_with +
    " is ran correctly";
  text_is_assert_multiple([f_name_prefix, f_name_suffix_before]);
  let r2 = function text_starts_ends_with_curry_right_result(f_name) {
    text_is_assert(f_name);
    let sew = text_starts_ends_with(
      f_name,
      f_name_prefix,
      f_name_suffix_before,
    );
    return sew;
  };
  return r2;
}
