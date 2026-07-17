import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
export function app_code_remainder_fraction(remainder, divisor) {
  "how far the remainder sits along 0..divisor-1 as a fraction 0..1, for placing it on a color spectrum; a divisor of 1 has no spread so it gives 0";
  let last = subtract(divisor, 1);
  let t = 0;
  if (last > 0) {
    t = divide(remainder, last);
  }
  return t;
}
