import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
export function app_code_lesson_expression_choose_order_decoys_generic(
  name_id,
  above,
  bank,
  decoys,
) {
  arguments_assert(arguments, 4);
  ("a whole choose-what-to-solve lesson: its title, what stands above the card, its questions, and the one thing such a lesson differs in - which wrong values are offered beside the right one");
  ("Every lesson of this kind was written out the same way, and the two little wrappers below were the whole of what was written. The quiz and the front page each want the wrong values handed to them, and a lesson had to say so twice, in two functions that differ only in which of the two they are talking to.");
  ("So a lesson is now its own four things and nothing else. What could be pressed instead is the one real choice among them - a line of numbers offers other numbers, a line of comparisons offers the other of true and false - and it is now made once, by name, where a reader can see it.");
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this lesson's wrong values";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      decoys,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong values the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      decoys,
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
