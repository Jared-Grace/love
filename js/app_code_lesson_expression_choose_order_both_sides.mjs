import { app_code_expression_value_decoys_mixed } from "./app_code_expression_value_decoys_mixed.mjs";
import { app_code_lesson_expression_choose_order_both_sides_above } from "./app_code_lesson_expression_choose_order_both_sides_above.mjs";
import { app_code_lesson_expression_choose_order_both_sides_questions } from "./app_code_lesson_expression_choose_order_both_sides_questions.mjs";
import { app_code_lesson_expression_choose_order_both_sides_title_name_id } from "./app_code_lesson_expression_choose_order_both_sides_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
export function app_code_lesson_expression_choose_order_both_sides() {
  ("choosing which part of a line to solve and then what that part comes to, on a line with arithmetic on each side of a comparison: 3 + 4 === 5 + 2, choose the 3 + 4, choose 7, then the 5 + 2, choose 7, then the ===, choose true");
  ("The same two presses on the same engine as the step-at-a-time lessons behind it, with one thing changed: the line holds both kinds of operator at once. A learner has pressed a line of arithmetic and been answered with numbers; here two presses are answered with numbers and the third with a true or a false.");
  ("This is the step that goes before the lesson which asks for the whole of such a line in one go. That lesson hands over 3 + 4 === 5 + 2 and asks what it comes to; before this screen there was nowhere the same line had ever been taken apart a press at a time, so a learner who could do it on a line of numbers had to discover for themselves that it was the same doing with one extra kind of answer.");
  ("Both arithmetic parts are ready from the first press, and neither is the right one. That is a real property of the line rather than something arranged - arithmetic binds tighter than a comparison on both sides at once - so the lesson simply says so, and a learner who is used to hunting for the one right press is told why there are two.");
  let name_id =
    app_code_lesson_expression_choose_order_both_sides_title_name_id();
  ("the quiz and the front page are the ones every lesson on this engine uses, handed this lesson's wrong values - the pressing, the layout and the finishing are the same doing, and only what could be pressed instead differs");
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this lesson's wrong values: numbers for an arithmetic part and the other of true and false for the comparison";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      app_code_expression_value_decoys_mixed,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong values the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      app_code_expression_value_decoys_mixed,
    );
  }
  let bank = app_code_lesson_expression_choose_order_both_sides_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_both_sides_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
