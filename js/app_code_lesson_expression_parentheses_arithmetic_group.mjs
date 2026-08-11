import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let t = text_to(first);
  let t2 = text_to(second);
  let code = text_combine_multiple([open, t, " ", symbol, " ", t2, close]);
  return code;
}
