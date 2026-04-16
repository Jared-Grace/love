import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function text_includes_curried_right(part) {
  return function text_includes_curried_right_result(input) {
    return text_includes(input, part);
  };
}
