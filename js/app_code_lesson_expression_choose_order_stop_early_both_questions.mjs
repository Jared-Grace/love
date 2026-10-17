import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_expression } from "./app_code_lesson_expression_choose_order_and_before_or_expression.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_tree_of_code } from "./app_code_lesson_expression_choose_order_and_before_or_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
export function app_code_lesson_expression_choose_order_stop_early_both_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the lesson that stops early with && and || on one line: the lines of the && before || lesson, with either operator leftmost, each marked to be solved as JavaScript solves it");
  ("Both ends, because the trap is the end the two lessons before did not show: false && true || true, where the && still goes before the || and what it skips is one plain word. Among the lines are also true || false && false, where the || is solved first and the && never is, so a learner has to look at which operator goes first and then at its left side, every line");
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
