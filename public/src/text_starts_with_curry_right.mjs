import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function text_starts_with_curry_right(f_name_prefix) {
  let r = function text_starts_with_curry_right_result(f_name) {
    text_starts_with(f_name, f_name_prefix);
  };
  return r;
}
