import { integer_random_0 } from "../../../love/public/src/integer_random_0.mjs";
export function digit_random() {
  const digit_max = 9;
  let r = integer_random_0(digit_max);
  return r;
}
