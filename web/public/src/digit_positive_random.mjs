import { integer_random_range } from "../../../love/public/src/integer_random_range.mjs";
export function digit_positive_random() {
  let r = integer_random_range(10);
  return r;
}
