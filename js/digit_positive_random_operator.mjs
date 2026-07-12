import { digit_positive_random } from "./digit_positive_random.mjs";
import { text_combine } from "./text_combine.mjs";
export function digit_positive_random_operator(operator) {
  let right = digit_positive_random();
  let combined = text_combine(operator, right);
  return combined;
}
