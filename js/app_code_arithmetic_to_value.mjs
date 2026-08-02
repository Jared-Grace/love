import { integer_random } from "./integer_random.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_arithmetic_to_value(value) {
  "a random small arithmetic expression, as a code string, that evaluates to value (value at least 2). Uses +, - and / - each always has a form for any such value - so a true equality can pair two different-looking expressions of the same value (3 + 4 === 5 + 2), and the learner sees the two sides are worked out first and only then compared. No * form, because a small product needs a factor pair the value may not have; the three chosen forms need no such luck.";
  function form_add() {
    "value split into two addends, both at least 1";
    let max = subtract(value, 1);
    let a = integer_random(1, max);
    let b = subtract(value, a);
    let r = [a, "+", b];
    return r;
  }
  function form_subtract() {
    "a larger number minus a small one, landing on value";
    let b = integer_random(1, 4);
    let a = add(value, b);
    let r2 = [a, "-", b];
    return r2;
  }
  function form_divide() {
    "a multiple of a small divisor, divided back down to value";
    let b = integer_random(2, 4);
    let a = multiply(value, b);
    let r3 = [a, "/", b];
    return r3;
  }
  let forms = [form_add, form_subtract, form_divide];
  let chosen = list_random_item(forms);
  let parts = chosen();
  let left = text_to(parts[0]);
  let symbol = parts[1];
  let right = text_to(parts[2]);
  let code = text_combine_multiple([left, " ", symbol, " ", right]);
  return code;
}
