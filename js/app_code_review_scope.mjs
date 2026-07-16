import { modulo } from "./modulo.mjs";
import { equal_0 } from "./equal_0.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { math_min } from "./math_min.mjs";
export function app_code_review_scope(lesson_number) {
  "how many past lessons a review after lesson_number covers, or null for no review";
  "the largest power of five dividing lesson_number, so 5,10,15,20 give 5 and 25 gives 25";
  let five = 5;
  function five_divides(x) {
    let remainder = modulo(x, five);
    let divisible = equal_0(remainder);
    return divisible;
  }
  let power_of_5 = 1;
  let n = lesson_number;
  while (five_divides(n)) {
    power_of_5 = multiply(power_of_5, five);
    n = divide(n, five);
  }
  let none = equal(power_of_5, 1);
  if (none) {
    return null;
  }
  "cap at 25 so no single review is a marathon (constant easy work > hard work);";
  "for every lesson up to 124 the power of 5 is already 25 or less, so this only bites at 125;";
  "when the curriculum passes ~125 this starts dropping old lessons from ever recurring - revisit then:";
  "sample from the full range, or move to per-item spaced repetition. deferred: the cost is falling";
  let cap = 25;
  let scope = math_min(power_of_5, cap);
  return scope;
}
