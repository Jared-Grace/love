import { range_from } from "./range_from.mjs";
import { digit_count_value_max } from "./digit_count_value_max.mjs";
import { digit_count_value_min } from "./digit_count_value_min.mjs";
export function digit_count_values(digit_count) {
  let from = digit_count_value_min(digit_count);
  let to = digit_count_value_max(digit_count);
  let values = range_from(from, to);
  return values;
}
