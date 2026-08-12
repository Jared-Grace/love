import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { ternary } from "./ternary.mjs";
import { add } from "./add.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_expression_parentheses_minus_divide_line } from "./app_code_lesson_expression_parentheses_minus_divide_line.mjs";
export function app_code_lesson_expression_parentheses_same_strength_subtract_line() {
  arguments_assert(arguments, 0);
  ("a - (b + c) or a - (b - c). For the minus form b is 5..9 and c is 2..4 so the group is never negative, and a is b + c + k so both the answer and the bracket-less wrong answer stay above zero");
  let inner_plus = list_random_item([true, false]);
  let on_true = integer_random(2, 5);
  let on_false = integer_random(5, 9);
  let b = ternary(inner_plus, on_true, on_false);
  let on_true2 = integer_random(2, 5);
  let on_false2 = integer_random(2, 4);
  let c = ternary(inner_plus, on_true2, on_false2);
  let k = integer_random(1, 8);
  let left = add(b, c);
  let a = add(left, k);
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let inner_symbol = ternary(inner_plus, plus, minus);
  let code = app_code_lesson_expression_parentheses_minus_divide_line(
    a,
    minus,
    b,
    inner_symbol,
    c,
  );
  return code;
}
