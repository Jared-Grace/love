import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_replace_curry_right(from, to) {
  let r2 = function text_replace_curry_right_result(f_name_before) {
    let f_name_wrapped = text_replace(f_name_before, from, to);
    return f_name_wrapped;
  };
  return r2;
}
