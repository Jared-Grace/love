import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_not_twice_expression } from "./app_code_lesson_expression_choose_order_not_twice_expression.mjs";
import { app_code_lesson_expression_choose_order_steps_above_generic } from "./app_code_lesson_expression_choose_order_steps_above_generic.mjs";
import { app_code_lesson_expression_choose_order_not_twice_recall } from "./app_code_lesson_expression_choose_order_not_twice_recall.mjs";
import { app_code_lesson_expression_choose_order_not_twice_intro } from "./app_code_lesson_expression_choose_order_not_twice_intro.mjs";
export function app_code_lesson_expression_choose_order_not_twice_above(root) {
  "what stands above the card on the press-at-a-time !! lesson: what one ! comes to, then one such line taken all the way down, then the sentences saying what is new";
  "The line is worked from true, which is the word the lesson on a single ! opened on, so a learner watching this run sees the line they already know appear inside a longer one rather than a new line altogether.";
  "It goes down through false and comes back to true, and that turn in the middle is the whole reason the run is worth watching. A learner who only saw the two ends would have no reason to believe anything happened between them.";
  arguments_assert(arguments, 1);
  let want_true = true;
  let tree =
    app_code_lesson_expression_choose_order_not_twice_expression(want_true);
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    app_code_lesson_expression_choose_order_not_twice_recall,
    tree,
    app_code_lesson_expression_choose_order_not_twice_intro,
  );
}
