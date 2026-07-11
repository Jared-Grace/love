import { subtract_ } from "../../../love/public/src/subtract_1.mjs";
import { exponent } from "../../../love/public/src/exponent.mjs";
import { digits_count } from "../../../love/public/src/digits_count.mjs";
import { add_ } from "../../../love/public/src/add_1.mjs";
export function digit_count_value_min(digit_count) {
  const base = digits_count();
  let difference = subtract_(digit_count);
  let from = exponent(base, difference);
  let min = add_(from);
  return min;
}
