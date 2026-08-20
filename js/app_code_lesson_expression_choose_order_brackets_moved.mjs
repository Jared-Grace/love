import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_title_name_id } from "./app_code_lesson_expression_choose_order_brackets_moved_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_questions } from "./app_code_lesson_expression_choose_order_brackets_moved_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_above } from "./app_code_lesson_expression_choose_order_brackets_moved_above.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved() {
  arguments_assert(arguments, 0);
  ("the same three words with one pair of brackets round the first two or round the last two, taken a press at a time: (false && true) || true or false && (true || true), choose what the marks gather, choose what it comes to, then the operator left holding it");
  ("The lesson before it always put the brackets round the || , so the bracketed pair and the || were the same pair and a learner could press the || every time and never be wrong. Here the marks go round either half, so what to press can only be read off where they are - which is the first time in this run that the brackets have to be read to answer.");
  ("It is also the first line a learner meets whose brackets are worth nothing. Round the && they say what the && was going to do anyway, and a run that only ever showed brackets changing something would leave a learner reading every pair as a warning that the ordinary order has been overturned.");
  ("Nothing new is being taught about what brackets mean. The rule is the one they were given among numbers and again next door - what is inside is solved first - and all this lesson does is stop telling them where the inside is.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id =
    app_code_lesson_expression_choose_order_brackets_moved_title_name_id();
  let bank = app_code_lesson_expression_choose_order_brackets_moved_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_brackets_moved_above,
    bank,
  );
  return lesson;
}
