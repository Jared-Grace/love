import { app_code_lesson_expression_choose_order_both_sides_above_generic } from "./app_code_lesson_expression_choose_order_both_sides_above_generic.mjs";
import { app_code_lesson_expression_either_first_expression } from "./app_code_lesson_expression_either_first_expression.mjs";
import { app_code_lesson_expression_sides_one_operator_say } from "./app_code_lesson_expression_sides_one_operator_say.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { noop } from "./noop.mjs";
export function app_code_lesson_expression_either_first_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: one line of this lesson's own kind worked all the way through, from why two operators are ready at once down to the value the line comes to");
  ("It stands above the card rather than under the line on it, because a card holding both a working out and the same line to press asks the learner to read the answer and then press for it. Above the card it is what the lesson is about; on the card it was what the card was about, and the card is now only the pressing.");
  ("Its own line rather than the line the learner presses. The two are built the same way and neither is the other's answer, so a learner who read the one above cannot get the one below right by copying it down.");
  ("The same run as the two lessons that follow it, told word for word the same way. It used to be its own telling - each ready operator taken first in turn, the line rewritten under each, and the two orders shown landing on one value. That showed the claim rather than saying it, but it showed it in a shape nothing else in the course uses, and a learner who read it here met the same fact again two screens later in a shape they had to learn a second time.");
  ("What the shared run says is stronger anyway. Two orders written out and landing on one value is one line that happened to work; the run gives the reason - there are two of this operator, and doing that operator comes to the same value every time - which is something a learner can carry to the next line instead of checking it again.");
  ("Nothing is recalled before the run and nothing is said after it. The recall the later lessons open with puts the word comparison back in front of the learner, and there is no comparison on this line; the sentence they close with says what their line holds that the one before it did not, and this is the first line of its kind.");
  let tree = app_code_lesson_expression_either_first_expression();
  app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    noop,
    app_code_lesson_expression_sides_one_operator_say,
    noop,
  );
}
