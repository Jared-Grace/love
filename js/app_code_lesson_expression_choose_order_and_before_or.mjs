export function app_code_lesson_expression_choose_order_and_before_or() {
  arguments_assert(arguments, 0);
  ("both && and || in the one line, taken a press at a time: false && true || true, choose the && , choose what it comes to, then choose the || and what that comes to");
  ("The reason the two lessons behind it exist. Each of them gives one of the operators an order of its own against the comparisons around it; neither says anything about the two of them meeting, and until they meet a learner has no way to know that they are not equals.");
  ("The line is written as plain trues and falses so that the one new thing on the screen is the one thing being taught. Comparisons either side would be four more presses of a kind already pressed twice, and every one of them would be a chance to get the line wrong for a reason that is not this lesson's.");
  ("Nothing has to refuse the wrong press. The || cannot go first because its left side is not a value yet - it is the && , still waiting - so the rule is read off the line rather than enforced against the learner, which is the same reading every lesson in this run has asked for.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id =
    app_code_lesson_expression_choose_order_and_before_or_title_name_id();
  let bank = app_code_lesson_expression_choose_order_and_before_or_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_and_before_or_above,
    bank,
  );
  return lesson;
}
