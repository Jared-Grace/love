import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_either_first_expression } from "./app_code_lesson_expression_either_first_expression.mjs";
import { app_code_lesson_expression_choose_order_both_sides_above_generic } from "./app_code_lesson_expression_choose_order_both_sides_above_generic.mjs";
import { noop } from "./noop.mjs";
import { app_code_lesson_expression_sides_two_parts_say } from "./app_code_lesson_expression_sides_two_parts_say.mjs";
export function app_code_lesson_expression_either_first_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: one line of this lesson's own kind worked all the way through, from why two operators are ready at once down to the value the line comes to");
  ("It stands above the card rather than under the line on it, because a card holding both a working out and the same line to press asks the learner to read the answer and then press for it. Above the card it is what the lesson is about; on the card it was what the card was about, and the card is now only the pressing.");
  ("Its own line rather than the line the learner presses. The two are built the same way and neither is the other's answer, so a learner who read the one above cannot get the one below right by copying it down.");
  ("The same run as the two lessons that follow it, told word for word the same way. It used to be its own telling - each ready operator taken first in turn, the line rewritten under each, and the two orders shown landing on one value. That showed the claim rather than saying it, but it showed it in a shape nothing else in the course uses, and a learner who read it here met the same fact again two screens later in a shape they had to learn a second time.");
  ("What the shared run says is stronger anyway. Two orders written out and landing on one value is one line that happened to work; the run gives the reason - the line is made of two parts, and solving one of them does not change what the other comes to - which is something a learner can carry to the next line instead of checking it again.");
  ("Its telling is the one that names the two parts, not the one that counts a shared operator. The two lessons after this one hand the same run a telling that counts, and they may: their two sides are written with the same operator every time. This lesson draws two shapes, and on the second of them the two sides are a plus and a times, so there is no operator to count two of. A telling true of only half the lines it is given is worse than one that says less.");
  ("Nothing is recalled before the run and nothing is said after it. The recall the later lessons open with puts the word comparison back in front of the learner, and there is no comparison on this line; the sentence they close with says what their line holds that the one before it did not, and this is the first line of its kind.");
  let tree = app_code_lesson_expression_either_first_expression();
  app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    noop,
    app_code_lesson_expression_sides_two_parts_say,
    noop,
  );
}
