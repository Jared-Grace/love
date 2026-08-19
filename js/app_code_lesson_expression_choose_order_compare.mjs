import { app_code_lesson_expression_choose_order_compare_title_name_id } from "./app_code_lesson_expression_choose_order_compare_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_compare_questions } from "./app_code_lesson_expression_choose_order_compare_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_compare_above } from "./app_code_lesson_expression_choose_order_compare_above.mjs";
export function app_code_lesson_expression_choose_order_compare() {
  "choosing which part of a line to solve and then what that part comes to, on a line whose parts are comparisons: true === (3 < 5), choose the 3 < 5, choose true out of true and false, see true === true, choose the ===, choose true";
  "The same two presses on the same engine as the lesson before it, with one thing changed: the operators are comparisons rather than arithmetic. A learner has chosen the order and chosen the value on a line of numbers; here they do it again where every value is a true or a false.";
  "This is the step that was missing. The lessons after it hand a learner a comparison compared against a true or false and ask for the answer to the whole line in one go, and before this screen there was nowhere the same line had ever been taken apart a press at a time - so a learner who could do it on numbers had to discover for themselves that it was the same doing.";
  "Two operators, the count the learner is used to. Two comparisons compared is three operators, and that is the two-comparisons lesson further on, not this one - the new thing here is what an operator IS on this line, and a longer line at the same moment would be two new things at once. Named rather than counted, because a place ahead goes stale the moment a lesson is moved and nothing checks it.";
  "The wrong value offered is the other of true and false, and there is only ever one of it. Nothing has to be invented: a comparison comes to true or false and to nothing else, so the whole of what could be pressed instead is already on the screen.";
  let name_id = app_code_lesson_expression_choose_order_compare_title_name_id();
  let bank = app_code_lesson_expression_choose_order_compare_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_compare_above,
    bank,
  );
  return lesson;
}
