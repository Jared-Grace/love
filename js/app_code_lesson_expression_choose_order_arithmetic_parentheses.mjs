import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_title_name_id } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_questions } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_questions.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_above } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_above.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses() {
  arguments_assert(arguments, 0);
  ("( and ) round a + or a - among numbers, taken a press at a time: 4 * (5 - 3), choose the minus, choose 2, see 4 * 2, choose the times, choose 8");
  ("It stands in front of the lesson that asks the same lines whole, which is where a pressing lesson stands throughout this course. Until now the marks were the one thing a learner met whole first: they were shown, explained and then asked for in one go, while every other rule on a line was pressed apart before it was asked for.");
  ("Nothing about the marks is new here and nothing about the pressing is new either. What is new is the two meeting: every line pressed so far was decided by the operators themselves, and on these lines the marks decide against them - the part inside goes first on a line where the times would otherwise have gone first.");
  ("The marks fall at either end of the times from question to question, which is what makes the lesson about them rather than about a place on the line. Always at the same end, every answer would sit where the last one did and a learner could press it right without ever reading them.");
  ("Nothing has to refuse the wrong press. The times cannot go first because the side the marks are on is not a value yet - it is a part still waiting - so the rule is read off the line rather than enforced against the learner, which is the same reading every pressing lesson in this run has asked for.");
  ("The wrong values offered are the ones the pressing lessons before it offer: what the other operator would have given on the same two numbers, and what the whole line comes to. They are worked out from the line rather than typed, so no line can be printed beside choices that do not belong to it.");
  let name_id =
    app_code_lesson_expression_choose_order_arithmetic_parentheses_title_name_id();
  ("the quiz and the front page are the ones every pressing lesson uses, handed this lesson's wrong values - the pressing, the layout and the finishing are the same doing, and only what could be pressed instead differs");
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this lesson's wrong values: the value the other operator would have given, and the value of the whole line";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      app_code_expression_value_decoys,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong values the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      app_code_expression_value_decoys,
    );
  }
  let bank =
    app_code_lesson_expression_choose_order_arithmetic_parentheses_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_arithmetic_parentheses_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
