import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
export function integer_random_less_1(row_count) {
  let v = integer_random_1(row_count) - 1;
  return v;
}
