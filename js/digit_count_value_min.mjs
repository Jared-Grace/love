import { subtract_1 } from "./subtract_1.mjs";
import { exponent } from "./exponent.mjs";
import { digits_count } from "./digits_count.mjs";
import { add_1 } from "./add_1.mjs";
export function digit_count_value_min(digit_count) {
  let base = digits_count();
  let difference = subtract_1(digit_count);
  let from = exponent(base, difference);
  let min = add_1(from);
  return min;
}
