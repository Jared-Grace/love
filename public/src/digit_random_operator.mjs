import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function digit_random_operator(operator) {
  let right = digit_positive_random();
  let combined = text_combine(operator, right);
  return combined;
}
