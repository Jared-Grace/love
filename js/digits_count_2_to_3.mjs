import { range_from } from "./range_from.mjs";
import { digit_count_3_max } from "./digit_count_3_max.mjs";
import { digit_count_2_min } from "./digit_count_2_min.mjs";
export function digits_count_2_to_3() {
  let from = digit_count_2_min();
  let to = digit_count_3_max();
  let ds = range_from(from, to);
  return ds;
}
