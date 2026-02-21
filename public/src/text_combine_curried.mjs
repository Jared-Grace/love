import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_curried(left) {
  let r = function text_combine_curried_result(right) {
    let combined = text_combine(left, right);
    return combined;
  };
  return r;
}
