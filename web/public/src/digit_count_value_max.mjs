import { subtract_ } from "../../../love/public/src/subtract_1.mjs";
import { exponent } from "../../../love/public/src/exponent.mjs";
import { digits_count } from "../../../love/public/src/digits_count.mjs";
export function digit_count_value_max(digit_count) {
  const base = digits_count();
  let from_ = exponent(base, digit_count);
  let difference = subtract_(from_);
  return difference;
}
