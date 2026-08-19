export function app_code_lesson_expression_choose_order_and_before_or_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the and-before-or lesson: what the two operators come to, then one such line taken all the way down, then the sentences saying what is new");
  ("The line run through is one of the few where the order changes the answer - a false on the left of the && and a true on the right of the ||. Taken the way the lesson teaches it comes to true; taken the other way round it comes to false. A run on a line where both ways agree would show the rule being followed and never show what it is for.");
  ("Which is why the left and the right are settled here rather than drawn: those are exactly the two places that decide whether the orders part. The one in the middle is drawn, because it changes nothing about that and a screen that reads the same on every visit reads as a picture rather than as a line being worked out.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let both = [true, false];
  let middle_truth = list_random_item(both);
  let tree =
    app_code_lesson_expression_choose_order_and_before_or_expression_parts(
      false,
      and_symbol,
      middle_truth,
      or_symbol,
      true,
    );
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    app_code_lesson_expression_choose_order_and_before_or_recall,
    tree,
    " has a true or a false on each side, and ",
    app_code_lesson_expression_choose_order_and_before_or_intro,
  );
}
