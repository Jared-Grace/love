import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys_mixed } from "./app_code_expression_value_decoys_mixed.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
export function app_code_lesson_expression_choose_order_mixed_generic(
  name_id,
  above,
  bank,
) {
  arguments_assert(arguments, 3);
  ("a whole choose-what-to-solve lesson whose lines hold both kinds of operator at once, so a press is answered with numbers on an arithmetic part and with true or false on a comparison");
  ("The two wrappers below are the only thing such a lesson has to say for itself: which wrong values to offer beside the right one. Everything else - the pressing, the layout, the finishing, the front page - is the doing every lesson on this engine already shares, so a lesson of this kind is now its title, its opening and its questions and nothing more.");
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this kind of lesson's wrong values: numbers for an arithmetic part and the other of true and false for the comparison";
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
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
