import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { app_code_lesson_expression_choose_order_pair_expression_parts } from "./app_code_lesson_expression_choose_order_pair_expression_parts.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_choose_order_pair_expression(
  want_true,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("two comparisons of two numbers each, compared against one another, built as a shape so the quiz can work one operator out at a time: (3 === 5) === (5 === 3)");
  ("Three operators, and the first line in this track to have TWO parts that may be solved first. Everything before it had one right press at every moment; here either comparison may go, in either order, and the line comes to the same answer whichever way it is taken. That is the new thing, and it is why this line comes after the one with a comparison beside a true or false rather than instead of it.");
  ("The two inner operators are drawn from the four the comparison lessons run on, so what each side comes to is not decided by which numbers happened to be drawn - two random digits are hardly ever equal, so sides built only from === would come to false almost every time and a learner would stop reading them.");
  ("The outer operator is chosen LAST, out of === and !==, and it is what makes the whole line land where the caller asked. Choosing it first and then hunting for numbers to suit would leave the numbers looking chosen, which is the one thing a learner reads a line for.");
  ("Numbers from 2 up, never 0 or 1, because a 1 or a 0 standing on a line whose parts come to true and false invites the reading that those ARE the true and the false - which is a real thing about JS and is not this lesson.");
  let same = js_operator_triple_equal_symbol();
  let different = js_operator_bang_double_equal_symbol();
  let smaller = js_operator_less_than_symbol();
  let bigger = js_operator_greater_than_symbol();
  let symbols = [same, different, smaller, bigger];
  let left_symbol = list_random_item(symbols);
  let right_symbol = list_random_item(symbols);
  let first_number = integer_random(2, 9);
  let second_number = integer_random(2, 9);
  let third_number = integer_random(2, 9);
  let fourth_number = integer_random(2, 9);
  let left_value = app_code_operator_solve(
    first_number,
    left_symbol,
    second_number,
  );
  let right_value = app_code_operator_solve(
    third_number,
    right_symbol,
    fourth_number,
  );
  let agree = equal(left_value, right_value);
  let wanted = equal(agree, want_true);
  let outer_symbol = ternary(wanted, same, different);
  let tree = app_code_lesson_expression_choose_order_pair_expression_parts(
    first_number,
    left_symbol,
    second_number,
    outer_symbol,
    third_number,
    right_symbol,
    fourth_number,
  );
  return tree;
}
