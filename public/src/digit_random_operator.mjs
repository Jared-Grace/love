import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { digit_random } from "../../../love/public/src/digit_random.mjs";
export function digit_random_operator(operator) {
  let right = digit_random();
  let combined = text_combine(operator, right);
  return combined;
}
