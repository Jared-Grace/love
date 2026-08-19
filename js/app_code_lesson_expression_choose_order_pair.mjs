import { app_code_lesson_expression_choose_order_pair_title_name_id } from "./app_code_lesson_expression_choose_order_pair_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_pair_questions } from "./app_code_lesson_expression_choose_order_pair_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_pair_above } from "./app_code_lesson_expression_choose_order_pair_above.mjs";
export function app_code_lesson_expression_choose_order_pair() {
  "two comparisons compared against each other, taken a press at a time: (3 === 5) === (5 === 3), choose either bracket, choose what it comes to, choose the other, choose what it comes to, then choose the === between them";
  "The line the whole gradual run was walking towards, taken apart the same way the learner has taken every line apart since 1 + 2 * 3. It comes BEFORE the parentheses-both-sides lesson, which puts this same shape in front of them whole and asks for the answer in one go - the arithmetic track already orders it that way, choosing the order a press at a time before ever asking for a line in the head, and this track follows it.";
  "Three operators, one more than the comparison-step-by-step lesson, and the parentheses lessons have shown a comparison inside brackets already - so neither the length nor the brackets are new here on their own. What IS new is that two parts can go first, and either order comes to the same answer. Lessons are named rather than counted here, because a place ahead goes stale the moment one is moved and nothing checks it.";
  "Both pairs of brackets are written rather than worked out from strength, because all three operators are the same strength and a line printed without them would show one side gathered and the other not. The two sides of this line are alike, and the writing has to say so.";
  "The wrong value offered is the other of true and false, the same as the lesson before it: every part of this line is a comparison, so the whole of what could be pressed instead is already on the screen.";
  let name_id = app_code_lesson_expression_choose_order_pair_title_name_id();
  let bank = app_code_lesson_expression_choose_order_pair_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_pair_above,
    bank,
  );
  return lesson;
}
