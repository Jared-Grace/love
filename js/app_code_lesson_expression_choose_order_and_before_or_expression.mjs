import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line holding both && and ||, built as a shape so the quiz can work one operator out at a time: false && true || true, or true && true || false");
  ("The three trues and falses are chosen from the outside in. What the whole line has to come to says what the || needs on each side of it, and what the || needs on its left says what the && has to come to, which in turn says what stands either side of the &&. So neither operator is asked what it means - each is asked which pairs reach the answer wanted, and the answer wanted is handed down from the line.");
  ("Written as plain trues and falses rather than as comparisons, because the one new thing here is which of the two operators goes first. A comparison on each side would be four more presses that the learner has already done twice, and the line would run past the width of a phone.");
  ("The line prints with no brackets in it, and none are needed: && is stronger than ||, so the && gathers its own two sides wherever it stands. A bracket written round the && would be teaching this lesson by giving it away.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let outer = app_code_operator_truths_wanted(or_symbol, want_true);
  let and_value = list_get(outer, 0);
  let right_truth = list_get(outer, 1);
  let inner = app_code_operator_truths_wanted(and_symbol, and_value);
  let left_truth = list_get(inner, 0);
  let middle_truth = list_get(inner, 1);
  let tree = app_code_expression_node_left_operator_first(
    left_truth,
    and_symbol,
    middle_truth,
    or_symbol,
    right_truth,
  );
  return tree;
}
