import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_three_above } from "./app_code_lesson_expression_choose_order_three_above.mjs";
import { app_code_lesson_expression_choose_order_three_questions } from "./app_code_lesson_expression_choose_order_three_questions.mjs";
import { app_code_lesson_expression_choose_order_three_title_name_id } from "./app_code_lesson_expression_choose_order_three_title_name_id.mjs";
export function app_code_lesson_expression_choose_order_three() {
  "choosing which part of a line to solve and then what that part comes to, three times over on the one line: 5 - 6 / 3 + 4, choose the divide, choose 2, see 5 - 2 + 4, choose the minus, choose 3, see 3 + 4, choose the plus, choose 7";
  "The same two presses on the same engine as the lesson before it, with one thing changed: the line has three operators on it rather than two, so the reading that ended the last lesson's line has to be done once more here.";
  "This is what stands between choosing the order on a short line and holding a whole line in the head. A learner who has only ever solved two steps has never had to re-read a line they themselves changed twice, and the lessons after this one ask for the answer to a line like this in one go.";
  "Every line carries a stronger operator that must go first, and after every step exactly one part of what is left has a number on each side. So there is never a choice between two right answers, and a learner who presses from the left is told they are wrong on the line rather than on the last step of it.";
  "The wrong values offered are the ones the arithmetic lessons before it offer: what the other operator would have given, and what the whole line comes to. On a three-step line the second of those is worth more than it was on a two-step one, because a learner reaching for the whole line's answer has two steps still to go rather than one.";
  let name_id = app_code_lesson_expression_choose_order_three_title_name_id();
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
  let bank = app_code_lesson_expression_choose_order_three_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_three_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
