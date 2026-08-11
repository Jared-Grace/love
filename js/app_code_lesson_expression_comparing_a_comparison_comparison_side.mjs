import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparing_a_comparison_comparison_side() {
  arguments_assert(arguments, 0);
  ("a comparison of two small numbers, with the true or false it works out to");
  let same = js_operator_triple_equal();
  let different = js_operator_bang_double_equal();
  let smaller = js_operator_less_than();
  let bigger = js_operator_greater_than();
  let operators = [same, different, smaller, bigger];
  let operator = list_random_item(operators);
  let symbol = property_get(operator, "operator");
  let fn = property_get(operator, "fn");
  let a = integer_random(2, 9);
  let b = integer_random(2, 9);
  let value = fn(a, b);
  let a_code = text_to(a);
  let b_code = text_to(b);
  let code = text_combine_multiple([a_code, " ", symbol, " ", b_code]);
  let r = {
    code,
    value,
  };
  return r;
}
