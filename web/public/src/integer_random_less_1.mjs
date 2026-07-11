import { integer_random_ } from "../../../love/public/src/integer_random_1.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function integer_random_less_(count) {
  let v = subtract(integer_random_(count), 1);
  return v;
}
