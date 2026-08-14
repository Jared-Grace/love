import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { digit_positive_random } from "./digit_positive_random.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_choose_order_expression(
  strong_right,
) {
  arguments_assert(arguments, 1);
  ("three digits and two operators, built as a shape rather than typed as text, so the quiz can work one operator out at a time: 1 + 2 * 3, or 1 * 2 + 3");
  ("strong_right says which side the multiplication lands on, and the caller decides it rather than chance, because the very first question a learner meets has to be the one where the operator to choose is NOT the leftmost. A learner shown the leftmost one first would be right by reading position instead of by reading the operator, and would be right for a reason that fails on the next question.");
  ("times and plus only, one each. The choice here is which operator goes first, and that choice is the same whichever weak operator is standing there - so a second weak operator would add reading without adding a decision. Minus can leave a line below zero and divide can leave one with a remainder, and both would put arithmetic the lesson is not about in front of the learner.");
  ("digits rather than larger numbers, because every step is worked out in the head and a three-digit product would make the lesson about multiplying.");
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let left = digit_positive_random();
  let middle = digit_positive_random();
  let right = digit_positive_random();
  if (strong_right) {
    let inner_right = app_code_expression_node(middle, times, right);
    let tree_right = app_code_expression_node(left, plus, inner_right);
    return tree_right;
  }
  let inner_left = app_code_expression_node(left, times, middle);
  let tree_left = app_code_expression_node(inner_left, plus, right);
  return tree_left;
}
