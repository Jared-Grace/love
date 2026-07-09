import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function integer_random_range(n) {
  let r = integer_random(0, subtract(n, 1));
  return r;
}
