import { text_between_newline } from "../../../love/public/src/text_between_newline.mjs";
export function text_between_newline_curried_right(b) {
  let r2 = function text_between_newline_curried_right_result(a) {
    let r = text_between_newline(a, b);
    return r;
  };
  return r2;
}
