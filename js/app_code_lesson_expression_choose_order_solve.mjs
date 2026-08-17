import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_lesson_expression_choose_order_questions } from "./app_code_lesson_expression_choose_order_questions.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_solve_above } from "./app_code_lesson_expression_choose_order_solve_above.mjs";
import { app_code_lesson_expression_choose_order_solve_title_name_id } from "./app_code_lesson_expression_choose_order_solve_title_name_id.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
export function app_code_lesson_expression_choose_order_solve() {
  "choosing which part of a line to solve, and then working that part out: 1 + 2 * 3, choose the times, choose 6 out of what it could come to, see 1 + 6, choose the plus, choose 7";
  "The lesson before this one chooses the order and is GIVEN each value; the lessons after it ask for the answer to a whole two-operator line in one go. Between those two stands one step, and this is it: the order is still chosen the same way, and the value that was handed over is now asked for.";
  "That step used to be missing, and the jump was the steepest in the block - a learner went from a screen that did the arithmetic for them straight to a screen that asked for the answer to the whole line with no steps shown at all. Doing the order and doing the arithmetic were separated on purpose one lesson earlier, and they have to be put back together somewhere before a line is asked for whole.";
  "The same two operators and the same digits as the lesson before, because the only new thing here is being asked for the value. A line that changed shape at the same time would be two new things at once, and a learner who got it wrong would not know which of them they had missed.";
  "The wrong values offered are worked out from the line itself rather than typed, so no line can be printed beside choices that do not belong to it.";
  let name_id = app_code_lesson_expression_choose_order_solve_title_name_id();
  ("the quiz and the front page are both written once for every lesson on this engine, and take the one thing that differs between them - which wrong values to offer - handed in");
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
  ("everything else this lesson is made of - the one quiz kind, the labels, the front page finding its own line - is what it has in common with the lesson before it, and is written once for the two of them");
  ("what the learner already knows stands above the card, worked through on a line of its own, because it is the telling and the card is the doing");
  let bank = app_code_lesson_expression_choose_order_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_solve_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
