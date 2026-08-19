import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_and_title_name_id } from "./app_code_lesson_expression_choose_order_and_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_and_questions } from "./app_code_lesson_expression_choose_order_and_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_and_above } from "./app_code_lesson_expression_choose_order_and_above.mjs";
export function app_code_lesson_expression_choose_order_and() {
  arguments_assert(arguments, 0);
  ("a comparison either side of &&, taken a press at a time: 3 < 5 && 2 < 4, choose either comparison, choose what it comes to, choose the other, choose what it comes to, then choose the && between them");
  ("The step that was missing in front of the lesson that hands a learner 3 < 5 && 2 < 4 whole and asks for the answer in one go. Everywhere else in this track a line is taken apart a press at a time before it is ever asked for in the head, and && was the one operator where it was not.");
  ("The shape is the one they have just pressed their way through with the two kinds swapped over: sides of arithmetic under a comparison become sides of comparison under an &&. So the rule they carry away is not about arithmetic at all - whatever is stronger goes first, and two parts of equal strength may go in either order.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id = app_code_lesson_expression_choose_order_and_title_name_id();
  let bank = app_code_lesson_expression_choose_order_and_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_and_above,
    bank,
  );
  return lesson;
}
