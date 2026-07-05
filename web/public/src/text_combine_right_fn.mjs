import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_right_fn(right_random_get, operator) {
  let right2 = right_random_get();
  let combined = text_combine(operator, right2);
  return combined;
}
