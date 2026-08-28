import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { ternary } from "./ternary.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line holding both && and ||, built as a shape so the quiz can work one operator out at a time: false && true || true, or true || false && true");
  ("The three trues and falses are chosen from the outside in. What the whole line has to come to says what the || needs on each side of it, and which of those two sides the && stands on says what the && has to come to, which in turn says what stands either side of it. So neither operator is asked what it means - each is asked which pairs reach the answer wanted, and the answer wanted is handed down from the line.");
  ("WHICH END THE && STANDS AT IS DRAWN, so the operator that goes first is not always the leftmost one on the line. Built with the && leftmost every time, as it was until now, every line the lesson ever printed could be answered by pressing the operator on the left - which is right by reading position instead of by reading the operator, and is the one habit this run of lessons is built to break.");
  ("It is drawn rather than taken in turns because the answer already alternates, one line true and the next false. An end alternating in step with that would agree with the answer every single time, which hands the learner a rule for which button to press without ever solving the line.");
  ("Written as plain trues and falses rather than as comparisons, because the one new thing here is which of the two operators goes first. A comparison on each side would be four more presses that the learner has already done twice, and the line would run past the width of a phone.");
  ("The line prints with no brackets in it whichever end the && stands at, and none are needed: && is stronger than ||, so the && gathers its own two sides wherever it stands. A bracket written round the && would be teaching this lesson by giving it away.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let outer = app_code_operator_truths_wanted(or_symbol, want_true);
  let and_left = boolean_random();
  ("the && takes one of the ||'s two sides and a plain true or false takes the other, and which of them is which is the whole of what the draw decides");
  let on_true = list_get(outer, 0);
  let on_false = list_get(outer, 1);
  let and_value = ternary(and_left, on_true, on_false);
  let on_true2 = list_get(outer, 1);
  let on_false2 = list_get(outer, 0);
  let far_truth = ternary(and_left, on_true2, on_false2);
  let inner = app_code_operator_truths_wanted(and_symbol, and_value);
  let inner_left = list_get(inner, 0);
  let inner_right = list_get(inner, 1);
  if (and_left) {
    let tree_and_first = app_code_expression_node_left_operator_first(
      inner_left,
      and_symbol,
      inner_right,
      or_symbol,
      far_truth,
    );
    return tree_and_first;
  }
  let tree_or_first = app_code_expression_node_right_operator_first(
    far_truth,
    or_symbol,
    inner_left,
    and_symbol,
    inner_right,
  );
  return tree_or_first;
}
