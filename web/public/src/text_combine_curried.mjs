import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_curried(left) {
  return function text_combine_curried_result(right) {
    return text_combine(left, right);
  };
}
