import { text_between_newline } from "../../../love/public/src/text_between_newline.mjs";
export function text_between_newline_curried_right(b) {
  return function text_between_newline_curried_right_result(a) {
    return text_between_newline(a, b);
  };
}
