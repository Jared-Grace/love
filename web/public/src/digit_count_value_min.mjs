import { exponent } from "../../../love/public/src/exponent.mjs";
import { digits_count } from "../../../love/public/src/digits_count.mjs";
export function digit_count_value_min(digit_count) {
  const base = digits_count();
  let from = exponent(base, digit_count);
  return from;
}
