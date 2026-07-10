import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { exponent } from "../../../love/public/src/exponent.mjs";
import { digits_count } from "../../../love/public/src/digits_count.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
export function digit_count_value_max(digit_count) {
  let a = add_1(digit_count);
  const base = digits_count();
  let from_1 = exponent(base, a);
  let difference = subtract_1(from_1);
  return difference;
}
