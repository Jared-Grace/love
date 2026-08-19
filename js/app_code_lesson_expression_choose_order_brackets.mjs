import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_brackets_title_name_id } from "./app_code_lesson_expression_choose_order_brackets_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_brackets_questions } from "./app_code_lesson_expression_choose_order_brackets_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_above } from "./app_code_lesson_expression_choose_order_brackets_above.mjs";
export function app_code_lesson_expression_choose_order_brackets() {
  arguments_assert(arguments, 0);
  ("brackets round the || of a line that also holds an && , taken a press at a time: false && (true || true) or (true || false) && true, choose the || , choose what it comes to, then choose the && and what that comes to");
  ("The lesson before it gave the two operators an order against each other. This one takes that order away again in the one way a line is allowed to: a learner who has just been told the && goes first now meets a line where it does not, and the only thing on the screen saying so is the pair of marks.");
  ("The brackets themselves are old - they were met among numbers, where they beat the * - so nothing about what they mean is new. What is new is that they can be put round these operators too, which is the whole of what one screen should ask.");
  ("Nothing has to refuse the wrong press. The && cannot go first because the side the brackets are on is not a value yet - it is the || , still waiting - so the rule is read off the line rather than enforced against the learner, which is the same reading every lesson in this run has asked for.");
  ("The brackets fall on either side of the && from question to question, which is what makes the lesson about the marks rather than about a place on the line. Always at the same end, every answer would sit where the last one did and a learner could press it right without ever reading them.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id =
    app_code_lesson_expression_choose_order_brackets_title_name_id();
  let bank = app_code_lesson_expression_choose_order_brackets_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_brackets_above,
    bank,
  );
  return lesson;
}
