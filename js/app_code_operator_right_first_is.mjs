import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_right_first } from "./app_code_operators_right_first.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_operator_right_first_is(symbol) {
  arguments_assert(arguments, 1);
  ("whether an operator works its right side out before its left: the power sign answers yes, and every other operator the app knows answers no");
  ("Which side of an operator has to be gathered follows from this and from nothing else. The side worked out LAST is the one that needs parentheses round an operator of equal strength, because otherwise a reader takes the line the other way round.");
  let right_first = app_code_operators_right_first();
  let is = list_includes(right_first, symbol);
  return is;
}
