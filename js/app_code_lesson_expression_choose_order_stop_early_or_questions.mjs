import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_expression } from "./app_code_lesson_expression_choose_order_and_before_or_expression.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_tree_of_code } from "./app_code_lesson_expression_choose_order_and_before_or_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
export function app_code_lesson_expression_choose_order_stop_early_or_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the stop-early lesson: the lines of the && before || lesson, each marked to be solved as JavaScript solves it");
  ("The same lines rather than new ones, because what is new here is only the order they are solved in. Among them are true || false && false, where the || is solved first and the && never is, and false && true || true, where the && still goes first and stopping early does not jump ahead of it. Some lines stop early and some do not, so a learner has to look at the left side each time rather than skip every time");
  function expression(want_true) {
    "a line of the && before || lesson, marked to stop early";
    let tree =
      app_code_lesson_expression_choose_order_and_before_or_expression(
        want_true,
      );
    let marked = app_code_expression_stops_early_marked(tree);
    return marked;
  }
  function tree_of_code(code) {
    "the shape behind a printed line, marked the same way, so a press is judged by the order the line was made with";
    let tree =
      app_code_lesson_expression_choose_order_and_before_or_tree_of_code(code);
    let marked = app_code_expression_stops_early_marked(tree);
    return marked;
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression,
    tree_of_code,
  );
  return bank;
}
