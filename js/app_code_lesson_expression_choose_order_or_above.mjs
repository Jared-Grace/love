import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_lesson_expression_sides_comparison_say } from "./app_code_lesson_expression_sides_comparison_say.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_or_expression } from "./app_code_lesson_expression_choose_order_or_expression.mjs";
import { app_code_lesson_expression_choose_order_both_sides_above_generic } from "./app_code_lesson_expression_choose_order_both_sides_above_generic.mjs";
import { app_code_lesson_expression_choose_order_or_intro } from "./app_code_lesson_expression_choose_order_or_intro.mjs";
export function app_code_lesson_expression_choose_order_or_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on the press-at-a-time || lesson: one such line worked all the way through, and then the sentence saying what is new");
  ("The run is done on a TRUE line, because a true line is the one a learner can check against the two values they have just watched being worked out. It is also where || has something of its own to show: a true line here may hold a false side, which is the whole of how it differs from the && the learner has just done.");
  ("The same run as the press-at-a-time && screen, word for word but for the operator it names. That is the point being made: nothing about taking a line apart changes when the operator in the middle does, and a screen laid out a new way would hide the sameness that is the lesson.");
  ("It used to say the lesson before it. Two lessons now stand between the two pressing screens - the all-at-once && twin, and the in-between lesson that uses && to join two comparisons - so the screen immediately behind this one is not the one being matched. Named by what it does rather than by a place. Corrected 2026-09-10.");
  let want_true = true;
  let tree = app_code_lesson_expression_choose_order_or_expression(want_true);
  let line = app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    app_code_lesson_expression_comparing_a_comparison_recall,
    app_code_lesson_expression_sides_comparison_say,
    app_code_lesson_expression_choose_order_or_intro,
  );
  return line;
}
