import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_or_title_name_id } from "./app_code_lesson_expression_choose_order_or_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_or_questions } from "./app_code_lesson_expression_choose_order_or_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_or_above } from "./app_code_lesson_expression_choose_order_or_above.mjs";
export function app_code_lesson_expression_choose_order_or() {
  arguments_assert(arguments, 0);
  ("a comparison either side of ||, taken a press at a time: 3 < 5 || 2 < 4, choose either comparison, choose what it comes to, choose the other, choose what it comes to, then choose the || between them");
  ("The same press-at-a-time step for || that the lesson before it gives &&, and it comes after that one on purpose: a learner who has just pressed their way through an && line has nothing new to learn about taking a line apart here, so the whole of their attention is on what || itself comes to.");
  ("Which is where the two lessons stop being the same lesson twice. Both sides true makes an && true and there is one way to have it; || is the other way round, so a true line here may hold a side that came out false. A learner watches themselves press false on one half and true on the whole.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id = app_code_lesson_expression_choose_order_or_title_name_id();
  let bank = app_code_lesson_expression_choose_order_or_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_or_above,
    bank,
  );
  return lesson;
}
