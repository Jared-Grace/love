import { integer_random } from "./integer_random.mjs";
import { subtract } from "./subtract.mjs";
export function integer_random_range(n) {
  let r = integer_random(0, subtract(n, 1));
  return r;
}
