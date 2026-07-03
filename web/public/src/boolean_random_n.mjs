import { integer_random_range } from "../../../love/public/src/integer_random_range.mjs";
export function boolean_random_n(n) {
  let r = integer_random_range(n);
  return r;
}
