import { app_code_lesson_expression_choose_order_compare_expression_parts } from "./app_code_lesson_expression_choose_order_compare_expression_parts.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { equal } from "./equal.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_choose_order_compare_expression(
  want_true,
  comparison_left,
) {
  arguments_assert(arguments, 2);
  ("a comparison of two numbers standing beside a plain true or false, built as a shape so the quiz can work one operator out at a time: 3 < 5 === true, or false !== (7 > 2)");
  ("Two operators a line, the same count the arithmetic lessons on this engine use, so the only new thing is what the operators ARE. The learner has already compared a comparison against a true or false and been asked for the answer whole; here the same line is taken apart a press at a time.");
  ("The inner operator is drawn from the four the comparison lessons run on, so the true or false it comes to is not decided by which numbers happened to be drawn - two random digits are hardly ever equal, so a line built only from === would come to false almost every time and a learner would stop reading it.");
  ("The outer operator is chosen LAST, out of === and !==, and it is what makes the whole line land where the caller asked. Choosing it first and then hunting for numbers to suit would leave the numbers looking chosen, which is the one thing a learner reads a line for.");
  ("Numbers from 2 up, never 0 or 1, because a 1 or a 0 standing beside a true or false invites the reading that those ARE the true and the false - which is a real thing about JS and is not this lesson.");
  let same = js_operator_triple_equal_symbol();
  let different = js_operator_bang_double_equal_symbol();
  let smaller = js_operator_less_than_symbol();
  let bigger = js_operator_greater_than_symbol();
  let symbols = [same, different, smaller, bigger];
  let inner_symbol = list_random_item(symbols);
  let left_number = integer_random(2, 9);
  let right_number = integer_random(2, 9);
  let inner_value = app_code_operator_solve(
    left_number,
    inner_symbol,
    right_number,
  );
  let truth = boolean_random();
  let agree = equal(inner_value, truth);
  let wanted = equal(agree, want_true);
  let outer_symbol = ternary(wanted, same, different);
  let tree = app_code_lesson_expression_choose_order_compare_expression_parts(
    left_number,
    inner_symbol,
    right_number,
    outer_symbol,
    truth,
    comparison_left,
  );
  return tree;
}
