import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_stop_early_or_expression } from "./app_code_lesson_expression_choose_order_stop_early_or_expression.mjs";
import { app_code_expression_stops_early_marked } from "./app_code_expression_stops_early_marked.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_tree_of_code } from "./app_code_lesson_expression_choose_order_and_before_or_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
export function app_code_lesson_expression_choose_order_stop_early_or_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the stop-early-on-|| lesson: lines like true || false && false, each marked to be solved as JavaScript solves it");
  ("Only lines with the || leftmost, since the 2026-10-17 split into one lesson for || and one for &&. The && before || lesson's reader still reads them, because they are the half of its lines that start with a true or a false and an ||. Some lines stop early and some do not, so a learner has to look at the left side each time rather than skip every time");
  function expression(want_true) {
    "a line with the || leftmost, marked to stop early";
    let tree =
      app_code_lesson_expression_choose_order_stop_early_or_expression(
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
