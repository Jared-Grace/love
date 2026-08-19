import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_operator_solve_before(symbol, right) {
  arguments_assert(arguments, 2);
  ("what one operator written before a single value works out to: !, true gives false");
  ("The one-sided twin of the step a step-by-step solver takes between two values. A learner pressing the parts of a line one at a time presses these the same way they press the rest, so the pressing needs answering the same way, from the one list that already says what each of these symbols means.");
  let operators = js_operators_unary();
  let operator = list_find_property(operators, "operator", symbol);
  null_not_is_assert_json(operator, {
    symbol,
  });
  let fn = property_get(operator, "fn");
  let value = fn(right);
  return value;
}
