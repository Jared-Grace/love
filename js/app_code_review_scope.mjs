import { modulo } from "./modulo.mjs";
import { equal_0 } from "./equal_0.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function app_code_review_scope(lesson_number) {
  "how many past lessons a review after lesson_number covers, or null for no review";
  "the largest power of five dividing lesson_number, so 5,10,15,20 give 5 and 25 gives 25";
  let five = 5;
  function five_divides(x) {
    let remainder = modulo(x, five);
    let divisible = equal_0(remainder);
    return divisible;
  }
  let scope = 1;
  let n = lesson_number;
  while (five_divides(n)) {
    scope = multiply(scope, five);
    n = divide(n, five);
  }
  let none = equal(scope, 1);
  if (none) {
    return null;
  }
  return scope;
}
