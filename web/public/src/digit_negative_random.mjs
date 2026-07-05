import { js_code_negation } from "../../../love/public/src/js_code_negation.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
export function digit_negative_random() {
  let d = digit_positive_random();
  let combined = js_code_negation(d);
  return combined;
}
