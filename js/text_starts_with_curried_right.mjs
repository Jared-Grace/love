import { fn_name } from "./fn_name.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_starts_with_curried_right(f_name_prefix) {
  text_combine_multiple([
    "asserts in this fn are to make sure ",
    fn_name("functions_rename_generic_starts_with"),
    " is ran correctly",
  ]);
  text_is_assert_json(f_name_prefix, {
    f_name_prefix,
  });
  let r = function text_starts_with_curry_right_result(f_name) {
    text_is_assert_json(f_name, {
      f_name,
      f_name_prefix,
    });
    let sw = text_starts_with(f_name, f_name_prefix);
    return sw;
  };
  return r;
}
