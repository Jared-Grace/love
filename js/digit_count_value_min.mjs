import { subtract_1 } from "./subtract_1.mjs";
import { exponent } from "./exponent.mjs";
import { digits_count } from "./digits_count.mjs";
export function digit_count_value_min(digit_count) {
  let base = digits_count();
  let difference = subtract_1(digit_count);
  let min = exponent(base, difference);
  return min;
}
