import { range_from } from "../../../love/public/src/range_from.mjs";
import { digit_count_3_max } from "../../../love/public/src/digit_count_3_max.mjs";
import { digit_count_2_min } from "../../../love/public/src/digit_count_2_min.mjs";
export function digits_count_2_to_() {
  let from = digit_count_2_min();
  let to = digit_count_3_max();
  let ds = range_from(from, to);
  return ds;
}
