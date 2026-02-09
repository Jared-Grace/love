import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { text_starts_ends_with } from "../../../love/public/src/text_starts_ends_with.mjs";
export function text_starts_ends_with_curry_right(
  f_name_prefix,
  f_name_suffix_before,
) {
  let r2 = function text_starts_ends_with_curry_right_result(f_name) {
    text_is_assert(value);
    let sew = text_starts_ends_with(
      f_name,
      f_name_prefix,
      f_name_suffix_before,
    );
    return sew;
  };
  return r2;
}
