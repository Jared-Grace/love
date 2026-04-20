import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_curried_right(right) {
  let c = function text_combine_curried_right_result(left) {
    let combined = text_combine(left, right);
    return combined;
  };
  return c;
}
