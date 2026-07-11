import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function integer_random_(max) {
  let r = integer_random(1, max);
  return r;
}
