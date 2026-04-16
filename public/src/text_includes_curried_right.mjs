import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function text_includes_curried_right(part) {
  let r = function text_includes_curried_right_result(input) {
    let i = text_includes(input, part);
    return i;
  };
  return r;
}
