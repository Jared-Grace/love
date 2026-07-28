import { integer_random } from "./integer_random.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function app_code_uneven_dividend(quotient, divisor) {
  "build an uneven dividend from a quotient and divisor: the whole part is quotient*divisor, a random leftover 1..divisor-1 makes the division never come out even, and the dividend is the whole part plus the leftover. Returns all three, since different lessons need the dividend, the whole part, or the leftover (which is the remainder). Single-sources the uneven-division setup every quotient / remainder / whole-part lesson depends on.";
  let max = subtract(divisor, 1);
  let leftover = integer_random(1, max);
  let whole_part = multiply(quotient, divisor);
  let dividend = add(whole_part, leftover);
  let result = {
    dividend,
    leftover,
    whole_part,
  };
  return result;
}
