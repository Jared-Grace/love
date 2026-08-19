import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_not_above } from "./app_code_lesson_expression_choose_order_not_above.mjs";
import { app_code_lesson_expression_choose_order_not_questions } from "./app_code_lesson_expression_choose_order_not_questions.mjs";
import { app_code_lesson_expression_choose_order_not_title_name_id } from "./app_code_lesson_expression_choose_order_not_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_not() {
  arguments_assert(arguments, 0);
  ("a comparison inside brackets with a ! in front of it, taken a press at a time: !(3 < 5), choose the comparison, choose what it comes to, then choose the ! and what that comes to");
  ("The lesson that reads a ! around a comparison already exists, and it asks for the whole line at once. This one asks for the same line in the order it is actually worked out, which is the one thing a learner solving a line in their head has to have: the ! is last, because until the comparison is done there is nothing for it to turn over.");
  ("Two parts rather than three. Every other press-at-a-time lesson so far has an operator with a part on each side of it; here is the first with an operator that has one, and the rule a learner has been reading off the shape all along says the same thing about it without being widened.");
  ("Nothing has to refuse the wrong press. The ! cannot go first because what stands after it is not a value yet - it is the comparison, still waiting - so the rule is read off the line rather than enforced against the learner, which is the same reading every lesson in this run has asked for.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id = app_code_lesson_expression_choose_order_not_title_name_id();
  let bank = app_code_lesson_expression_choose_order_not_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_not_above,
    bank,
  );
  return lesson;
}
