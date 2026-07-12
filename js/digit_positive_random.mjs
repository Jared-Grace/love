import { digit_max } from "./digit_max.mjs";
import { integer_random_1 } from "./integer_random_1.mjs";
export function digit_positive_random() {
  let max = digit_max();
  let r = integer_random_1(max);
  return r;
}
