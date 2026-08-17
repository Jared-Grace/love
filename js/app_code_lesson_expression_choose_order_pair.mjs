import { app_code_expression_value_decoys_boolean } from "./app_code_expression_value_decoys_boolean.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_pair_above } from "./app_code_lesson_expression_choose_order_pair_above.mjs";
import { app_code_lesson_expression_choose_order_pair_questions } from "./app_code_lesson_expression_choose_order_pair_questions.mjs";
import { app_code_lesson_expression_choose_order_pair_title_name_id } from "./app_code_lesson_expression_choose_order_pair_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
export function app_code_lesson_expression_choose_order_pair() {
  "two comparisons compared against each other, taken a press at a time: (3 === 5) === (5 === 3), choose either bracket, choose what it comes to, choose the other, choose what it comes to, then choose the === between them";
  "The line the whole gradual run was walking towards. A learner met it two lessons ago and was asked for the answer to the whole of it in one go; here it is taken apart the same way they have taken every line apart since 1 + 2 * 3.";
  "Three operators, one more than the lesson before it, and the one before that had two comparisons on it already - so neither the length nor the operators are new here on their own. What IS new is that two parts can go first, and either order comes to the same answer.";
  "Both pairs of brackets are written rather than worked out from strength, because all three operators are the same strength and a line printed without them would show one side gathered and the other not. The two sides of this line are alike, and the writing has to say so.";
  "The wrong value offered is the other of true and false, the same as the lesson before it: every part of this line is a comparison, so the whole of what could be pressed instead is already on the screen.";
  let name_id = app_code_lesson_expression_choose_order_pair_title_name_id();
  ("the quiz and the front page are the ones the two lessons before use, handed this lesson's wrong values - the pressing, the layout and the finishing are the same doing, and only what could be pressed instead differs");
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this lesson's wrong value: the other of true and false";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      app_code_expression_value_decoys_boolean,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong value the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      app_code_expression_value_decoys_boolean,
    );
  }
  let bank = app_code_lesson_expression_choose_order_pair_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_pair_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
