import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_flat_numbers_symbols } from "./app_code_expression_flat_numbers_symbols.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { list_size } from "./list_size.mjs";
import { each_range } from "./each_range.mjs";
export function app_code_expression_flat_value_left_to_right(code) {
  arguments_assert(arguments, 1);
  ("what a line of arithmetic comes to when every operator on it is worked out in the order it is written, whichever operators they are: 5 - 6 / 3 + 4 read that way gives 3.666..., where the line itself comes to 7");
  ("The value a learner lands on who reads a line the way they read a sentence, and it is the one wrong answer the lessons about which operator goes first exist to take away. Offered beside the right answer it asks the learner the very thing the lesson taught, rather than asking them to count again.");
  ("Any number of operators, because reading from the left is the same doing at every length. The reader written for two of them is next door and stays there: it is reached from the lessons of two operators, and a lesson of three cannot use it.");
  let parts = app_code_expression_flat_numbers_symbols(code);
  let numbers = property_get(parts, "numbers");
  let symbols = property_get(parts, "symbols");
  let value = list_get(numbers, 0);
  function step(index) {
    "one operator worked out against what everything to its left has come to";
    let symbol = list_get(symbols, index);
    let number_at = add_1(index);
    let number = list_get(numbers, number_at);
    value = app_code_operator_solve(value, symbol, number);
  }
  let operator_count = list_size(symbols);
  each_range(operator_count, step);
  return value;
}
