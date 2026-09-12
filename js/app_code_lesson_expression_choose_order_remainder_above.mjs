import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_remainder_random } from "./app_code_expression_remainder_random.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
import { app_code_lesson_expression_choose_order_remainder_recall } from "./app_code_lesson_expression_choose_order_remainder_recall.mjs";
import { app_code_lesson_expression_choose_order_remainder_intro } from "./app_code_lesson_expression_choose_order_remainder_intro.mjs";
export function app_code_lesson_expression_choose_order_remainder_above(
  root,
  context_unused,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on this lesson: the two things to remember, then a line of this lesson's own kind walked all the way down to its value with the reason for each step, then the sentence saying what is new");
  ("The same recall, run, hinge shape as every step-at-a-time lesson around it, laid out by the one that lays them all out, so a learner arriving here reads the screen they have been reading and only the line on it is new.");
  ("One line is walked, and no heading above it. A second walk is for a lesson whose lines come in two kinds and has to say how the second differs from the first; every line here is the one kind.");
  ("Four steps is the longest walk in this run, and it is walked whole rather than opened at the second step. The first two steps are the ones a learner pressed on the screen before this one, and watching them go by in the same words is what says that the longer line holds the shorter one.");
  let tree = app_code_expression_remainder_random();
  let heading_none = [];
  let walks = [
    {
      heading: heading_none,
      tree,
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    app_code_lesson_expression_choose_order_remainder_recall,
    walks,
    app_code_lesson_expression_choose_order_remainder_intro,
  );
}
