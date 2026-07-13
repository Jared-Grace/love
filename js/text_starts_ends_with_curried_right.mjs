import { functions_rename_if_starts_ends_with } from "./functions_rename_if_starts_ends_with.mjs";
import { text_is_assert_multiple } from "./text_is_assert_multiple.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { text_starts_ends_with } from "./text_starts_ends_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_starts_ends_with_curried_right(
  f_name_prefix,
  f_name_suffix_before,
) {
  text_combine_multiple([
    "asserts in this fn are to make sure ",
    functions_rename_if_starts_ends_with,
    " is ran correctly",
  ]);
  text_is_assert_multiple([f_name_prefix, f_name_suffix_before]);
  let r = function text_starts_ends_with_curry_right_result(f_name) {
    text_is_assert_json(f_name, {
      hint: "each function name being checked should be text — did a non-text value arrive?",
      f_name,
      f_name_prefix,
      f_name_suffix_before,
    });
    let sew = text_starts_ends_with(
      f_name,
      f_name_prefix,
      f_name_suffix_before,
    );
    return sew;
  };
  return r;
}
