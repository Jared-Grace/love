import { digit_max } from "../../../love/public/src/digit_max.mjs";
import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
export function digit_positive_random() {
  let max = digit_max();
  let r = integer_random_1(max);
  return r;
}
