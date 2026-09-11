import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { equal } from "./equal.mjs";
import { integer_random } from "./integer_random.mjs";
import { ternary } from "./ternary.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_expression_choose_order_operators_expression_parts } from "./app_code_lesson_expression_choose_order_operators_expression_parts.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_expression(
  group_left,
) {
  arguments_assert(arguments, 1);
  ("three numbers with a + or a - gathered by ( and ) at one end of a times, built as a shape so the quiz can work one part out at a time: (2 + 6) * 3, or 4 * (5 - 3)");
  ("The lines are the lines of the lesson straight after this one, which asks the same lines whole. That is the pairing every pressing lesson in this course stands in: the same line pressed apart here and answered in one go there, so what the pressing taught is what the answering asks for.");
  ("The gathered part is a + or a - and the part outside is always a times, because that is the only way round a pair of these marks changes anything. A + outside and a times inside would print marks that agree with what the operators were going to do anyway, and a learner pressing that line would be right without reading them.");
  ("The numbers are drawn the way the lesson after this one draws them: for a minus the larger number is written first, so no gathered part is ever below zero, and the number outside is small so the value stays inside what a learner can hold.");
  ("Which end the marks stand at is handed in rather than drawn, because a screen shows one line and the bank hands the two ends out in turns - a learner shown the same end four times running would have been taught the lesson at one end of a line.");
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let inner_symbol = list_random_item([plus, minus]);
  let adding = equal(inner_symbol, plus);
  let high = integer_random(5, 9);
  let low = integer_random(2, 4);
  let inner_first = ternary(adding, low, high);
  let inner_second = ternary(adding, high, low);
  let outer_number = integer_random(2, 5);
  let left = ternary(group_left, inner_first, outer_number);
  let middle = ternary(group_left, inner_second, inner_first);
  let right = ternary(group_left, outer_number, inner_second);
  ("the gathered part is the one solved first, so it is the one that goes inside the shape, and it goes on the right of the line exactly when the marks are not on the left");
  let strong_right = not(group_left);
  let tree = app_code_lesson_expression_choose_order_operators_expression_parts(
    left,
    middle,
    right,
    times,
    inner_symbol,
    strong_right,
  );
  return tree;
}
