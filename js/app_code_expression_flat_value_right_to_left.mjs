import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_flat_numbers_symbols } from "./app_code_expression_flat_numbers_symbols.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { list_size } from "./list_size.mjs";
import { each_range } from "./each_range.mjs";
export function app_code_expression_flat_value_right_to_left(code) {
  arguments_assert(arguments, 1);
  ("what a line of arithmetic comes to when its operators are worked out from the right hand end back towards the left: 8 - 2 - 4 + 7 read that way gives 17, where the line itself comes to 9");
  ("The other order there is. On a line whose operators are all of one kind, reading from the left and reading from the right are the only two ways to take it, and the lesson about such a line is the lesson that they differ. So this is the wrong answer that lesson is about, and a learner who answers it has read the line backwards rather than miscounted.");
  ("It is worth nothing on a line carrying a times or a divide among pluses and minuses, where the mistake is reading from the left instead of looking for the stronger operator. That line's wrong value is asked for next door.");
  let parts = app_code_expression_flat_numbers_symbols(code);
  let numbers = property_get(parts, "numbers");
  let symbols = property_get(parts, "symbols");
  let last = list_size_subtract(numbers, 1);
  let value = list_get(numbers, last);
  let back = list_size_subtract(symbols, 1);
  function step(offset) {
    "one operator worked out against what everything to its right has come to";
    let index = subtract(back, offset);
    let symbol = list_get(symbols, index);
    let number = list_get(numbers, index);
    value = app_code_operator_solve(number, symbol, value);
  }
  let operator_count = list_size(symbols);
  each_range(operator_count, step);
  return value;
}
