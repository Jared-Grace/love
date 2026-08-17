import { app_code_lesson_expression_choose_order_operators_expression_parts } from "./app_code_lesson_expression_choose_order_operators_expression_parts.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_choose_order_operators_expression(
  strong_right,
) {
  arguments_assert(arguments, 1);
  ("three digits and two operators drawn from all four, built as a shape so the quiz can work one operator out at a time: 8 - 2 * 3, or 6 / 3 + 4");
  ("The lesson before this one runs on times and plus alone, and gave a reason: minus can leave a line below zero and divide can leave one with a remainder, and either would put arithmetic the lesson is not about in front of the learner. That reason is about which NUMBERS get drawn, not about which operators are allowed, so it is answered by drawing numbers that cannot do either rather than by leaving half the operators out.");
  ("The stronger operator's two numbers are drawn as a pair whose answer is a single digit whichever of the two strong operators is standing there. The same pair serves both: for times the pair IS the two numbers and their product is the answer, and for divide the product is the number being divided, so the answer is the other half of the pair. One draw, two operators, and no line where the strong step leaves a remainder.");
  ("The weak operator's number is then drawn to fit what the strong step already came to. On a minus line it is drawn at or below that value when the minus takes it away, and at or above it when it is what the value is taken from, so no line this lesson prints can fall below zero. On a plus line nothing has to be avoided and it is drawn freely.");
  ("Numbers from 2 up, never 0 or 1, because a line that multiplies or divides by 1 comes out the same as the line without it, and a learner reading such a line learns nothing about which operator went first.");
  let times = js_operator_asterisk_symbol();
  let divide = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let strong_symbols = [times, divide];
  let weak_symbols = [plus, minus];
  let strong_symbol = list_random_item(strong_symbols);
  let weak_symbol = list_random_item(weak_symbols);
  ("the pairs whose product is itself a single digit, written out rather than drawn from a range, because two numbers drawn freely from 2 up multiply past 9 more often than not and the pair has to serve the divide lines too");
  let pairs = [
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 2],
    [3, 3],
    [4, 2],
  ];
  let pair = list_random_item(pairs);
  let pair_first = list_get(pair, 0);
  let pair_second = list_get(pair, 1);
  let product = app_code_operator_solve(pair_first, times, pair_second);
  let divide_is = equal(strong_symbol, divide);
  ("for times the pair is the two numbers as drawn; for divide the number being divided is their product, so that dividing by the second gives the first back exactly");
  let strong_first = ternary(divide_is, product, pair_first);
  let strong_value = app_code_operator_solve(
    strong_first,
    strong_symbol,
    pair_second,
  );
  let minus_is = equal(weak_symbol, minus);
  ("when the strong part sits on the right, the weak number is what the strong answer is taken FROM, so it has to be at least as big; when the strong part sits on the left, the weak number is what is taken AWAY, so it has to be no bigger");
  let weak_low = ternary(minus_is, ternary(strong_right, strong_value, 2), 2);
  let weak_high = ternary(minus_is, ternary(strong_right, 9, strong_value), 9);
  let weak_number = integer_random(weak_low, weak_high);
  let left = ternary(strong_right, weak_number, strong_first);
  let middle = ternary(strong_right, strong_first, pair_second);
  let right = ternary(strong_right, pair_second, weak_number);
  let tree = app_code_lesson_expression_choose_order_operators_expression_parts(
    left,
    middle,
    right,
    weak_symbol,
    strong_symbol,
    strong_right,
  );
  return tree;
}
