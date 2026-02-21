import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
export function integer_random_less_1(count) {
  let v = integer_random_1(count) - 1;
  return v;
}
