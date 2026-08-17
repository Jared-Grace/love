import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_operators_above } from "./app_code_lesson_expression_choose_order_operators_above.mjs";
import { app_code_lesson_expression_choose_order_operators_questions } from "./app_code_lesson_expression_choose_order_operators_questions.mjs";
import { app_code_lesson_expression_choose_order_operators_title_name_id } from "./app_code_lesson_expression_choose_order_operators_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
export function app_code_lesson_expression_choose_order_operators() {
  "choosing which part of a line to solve and then what that part comes to, on a line built from any of the four arithmetic operators: 8 - 2 * 3, choose the times, choose 6, see 8 - 6, choose the minus, choose 2";
  "The same two presses on the same engine as the lesson before it, with one thing changed: the operators are drawn from all four rather than being times and plus every line. A learner has chosen the order and chosen the value on a line of times and plus; here they do it again where the strong one may be a divide and the weak one a minus.";
  "This is the step that was missing. Every gradual line a learner had ever pressed was built from times and plus, so a learner could have been pressing the times rather than pressing the stronger operator, and nothing on any screen would have told them apart. The lessons straight after this one ask for times, divide, plus and minus lines whole and in the head, and until now nothing had taken one of those lines apart a press at a time first.";
  "Two operators, the count the learner is used to. Three is the next step and it is a lesson of its own - the new thing here is which operators can turn up, and a longer line at the same moment would be two new things at once.";
  "The wrong values offered are the ones the arithmetic lesson before it offers: what the other operator would have given, and what the whole line comes to. They are worked out from the line rather than typed, so no line can be printed beside choices that do not belong to it.";
  let name_id =
    app_code_lesson_expression_choose_order_operators_title_name_id();
  ("the quiz and the front page are the ones the lessons on either side use, handed this lesson's wrong values - the pressing, the layout and the finishing are the same doing, and only what could be pressed instead differs");
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
  let bank = app_code_lesson_expression_choose_order_operators_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_operators_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
