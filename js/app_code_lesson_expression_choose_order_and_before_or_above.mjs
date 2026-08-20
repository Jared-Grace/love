import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_lesson_expression_choose_order_sides_settled_tree } from "./app_code_lesson_expression_choose_order_sides_settled_tree.mjs";
import { app_code_lesson_expression_choose_order_steps_above_generic } from "./app_code_lesson_expression_choose_order_steps_above_generic.mjs";
import { app_code_lesson_expression_choose_order_truths_step_sides } from "./app_code_lesson_expression_choose_order_truths_step_sides.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_recall } from "./app_code_lesson_expression_choose_order_and_before_or_recall.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_intro } from "./app_code_lesson_expression_choose_order_and_before_or_intro.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the and-before-or lesson: what the two operators come to, then one such line taken all the way down, then the sentences saying what is new");
  ("The line run through is one of the few where the order changes the answer. Taken the way the lesson teaches it comes to true; taken the other way round it comes to false.");
  ("The parts are hung together by letting the operators decide, which is what this lesson is about - the and reaches for its two neighbours before the or does. The brackets lesson next door hands in a different way of hanging them and everything else on the screen is the same, so everything else is said once, next door.");
  ("The and is asked for leftmost every time, and there is nowhere else it can go. Letting the operators decide is the whole lesson, and an or standing leftmost could only keep its two neighbours by having brackets round it - which is the next lesson, not this one.");
  ("One line, where the brackets lesson walks two. There is only one shape here to show, because nothing on this screen moves; the marks that could move are exactly what the next lesson adds.");
  ("The one in the middle is drawn, because it changes neither of those things and a screen that reads the same on every visit reads as a picture rather than as a line being worked out.");
  let both = [true, false];
  let middle_truth = list_random_item(both);
  let tree = app_code_lesson_expression_choose_order_sides_settled_tree(
    app_code_expression_node_left_operator_first,
    false,
    middle_truth,
  );
  let step_sides = app_code_lesson_expression_choose_order_truths_step_sides();
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    app_code_lesson_expression_choose_order_and_before_or_recall,
    tree,
    step_sides,
    app_code_lesson_expression_choose_order_and_before_or_intro,
  );
}
