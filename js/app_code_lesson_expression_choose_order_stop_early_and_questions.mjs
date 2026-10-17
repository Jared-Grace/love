import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_parentheses_and_or_expression } from "./app_code_lesson_expression_choose_order_parentheses_and_or_expression.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_parentheses_and_or_tree_of_code } from "./app_code_lesson_expression_choose_order_parentheses_and_or_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
export function app_code_lesson_expression_choose_order_stop_early_and_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the stop-early-on-&& lesson: lines like false && (true || true), each marked to be solved as JavaScript solves it");
  ("The parentheses stand on the right of the && only. There the whole (... || ...) is what a false on the left skips. With them on the left, as in (true || false) && false, what && skips is one plain word, which shows nothing. About two lines in three that come to false stop early; a line that comes to true never does");
  function expression(want_true) {
    "a line with the && leftmost and parentheses on its right, marked to stop early";
    let tree =
      app_code_lesson_expression_choose_order_parentheses_and_or_expression(
        want_true,
        false,
      );
    let marked = app_code_expression_stops_early_marked(tree);
    return marked;
  }
  function tree_of_code(code) {
    "the shape behind a printed line, marked the same way, so a press is judged by the order the line was made with";
    let tree =
      app_code_lesson_expression_choose_order_parentheses_and_or_tree_of_code(
        code,
      );
    let marked = app_code_expression_stops_early_marked(tree);
    return marked;
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression,
    tree_of_code,
  );
  return bank;
}
