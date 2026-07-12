import { digit_max } from "./digit_max.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
export function digit_random() {
  let max = digit_max();
  let r = integer_random_0(max);
  return r;
}
