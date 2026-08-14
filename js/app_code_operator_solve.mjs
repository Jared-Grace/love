import { app_code_operators_solvable } from "./app_code_operators_solvable.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_operator_solve(left, symbol, right) {
  arguments_assert(arguments, 3);
  ("what one operator standing between two values works out to: 2, *, 3 gives 6, and 3, ===, 5 gives false");
  ("The one step a step-by-step solver takes. A learner picking the operators of a line one at a time needs each pick answered, and answering it by hand at each lesson would be the same table of symbols written out again every time, with a different chance of being wrong in each copy.");
  let operators = app_code_operators_solvable();
  let operator = list_find_property(operators, "operator", symbol);
  null_not_is_assert_json(operator, {
    symbol,
  });
  let fn = property_get(operator, "fn");
  let value = fn(left, right);
  return value;
}
