import { text_regex_match } from "./text_regex_match.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { js_two_operator_line_parts } from "./js_two_operator_line_parts.mjs";
export function js_eval_left_to_right(expression) {
  "evaluate a two-operator arithmetic expression 'a op b op c' strictly LEFT TO RIGHT, ignoring operator precedence - so '2 + 3 * 4' gives (2 + 3) * 4 = 20, the classic order-of-operations mistake. Used as the tailored decoy for the cross-precedence pair lessons (where it differs from the real answer); for same-precedence pairs it equals the real answer, so the multiple choice just drops it as a duplicate";
  "Which of the five words is a value and which two are the operators is asked next door, because a line of true and false is pulled apart the same way and the same five reads were written out here as well. All that is left here is what a value spells in arithmetic - a number - and what each operator does to two of them.";
  let tokens = text_regex_match(expression, /\d+|[+\-*\/]/g);
  let parts = js_two_operator_line_parts(tokens, operand);
  let first = apply(parts.first_operator, parts.left, parts.middle);
  let result = apply(parts.second_operator, first, parts.right);
  return result;
  function operand(word) {
    let i = integer_from_base_try(word, 10);
    return i;
  }
  function apply(operator, x, y) {
    if (equal(operator, "+")) {
      let sum = add(x, y);
      return sum;
    }
    if (equal(operator, "-")) {
      let difference = subtract(x, y);
      return difference;
    }
    if (equal(operator, "*")) {
      let p = multiply(x, y);
      return p;
    }
    let divided = divide(x, y);
    return divided;
  }
}
