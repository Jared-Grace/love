import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_right_fn(left, lambda) {
  let right = lambda();
  let combined = text_combine(left, right);
  return combined;
}
