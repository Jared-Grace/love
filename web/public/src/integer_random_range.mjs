import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function integer_random_range(n) {
  let r = integer_random(0, n - 1);
  return r;
}
