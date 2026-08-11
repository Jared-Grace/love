import { js_code_operation } from "./js_code_operation.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_parentheses_arithmetic_group() {
  arguments_assert(arguments, 0);
  ("a small + or - inside ( and ); for - the first number is the larger one, so the group is never negative");
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let symbol = list_random_item([plus, minus]);
  let high = integer_random(5, 9);
  let low = integer_random(2, 4);
  let adding = equal(symbol, plus);
  let first = ternary(adding, low, high);
  let second = ternary(adding, high, low);
  let inside = js_code_operation(first, symbol, second);
  let code = js_code_wrap_parenthesis(inside);
  return code;
}
