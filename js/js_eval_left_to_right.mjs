import { text_regex_match } from "./text_regex_match.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function js_eval_left_to_right(expression) {
  "evaluate a two-operator arithmetic expression 'a op b op c' strictly LEFT TO RIGHT, ignoring operator precedence - so '2 + 3 * 4' gives (2 + 3) * 4 = 20, the classic order-of-operations mistake. Used as the tailored decoy for the cross-precedence pair lessons (where it differs from the real answer); for same-precedence pairs it equals the real answer, so the multiple choice just drops it as a duplicate";
  let tokens = text_regex_match(expression, /\d+|[+\-*\/]/g);
  function operand(index) {
    return integer_from_base_try(list_get(tokens, index), 10);
  }
  function apply(operator, x, y) {
    if (equal(operator, "+")) {
      return add(x, y);
    }
    if (equal(operator, "-")) {
      return subtract(x, y);
    }
    if (equal(operator, "*")) {
      return multiply(x, y);
    }
    return divide(x, y);
  }
  let a = operand(0);
  let op1 = list_get(tokens, 1);
  let b = operand(2);
  let op2 = list_get(tokens, 3);
  let c = operand(4);
  let first = apply(op1, a, b);
  let result = apply(op2, first, c);
  return result;
}
