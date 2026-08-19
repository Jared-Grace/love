export function app_code_lesson_expression_choose_order_both_sides_any_comparison_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the lesson whose lines hold any comparison but ===: one such line worked all the way through, and then the sentence saying what is new");
  ("The run is done on a TRUE line, because a true line is the one a learner can check against the two values they have just watched being worked out. A false line is worked through just as correctly and reads as something having gone wrong on a screen whose job is to show the working going right.");
  let want_true = true;
  let tree =
    app_code_lesson_expression_choose_order_both_sides_any_comparison_expression(
      want_true,
    );
  app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    app_code_lesson_expression_choose_order_both_sides_any_comparison_intro,
  );
}
