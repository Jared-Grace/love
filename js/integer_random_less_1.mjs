import { integer_random_1 } from "./integer_random_1.mjs";
import { subtract } from "./subtract.mjs";
export function integer_random_less_1(count) {
  let v = subtract(integer_random_1(count), 1);
  return v;
}
