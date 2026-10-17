import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_stop_early_both_title_name_id } from "./app_code_lesson_expression_choose_order_stop_early_both_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_stop_early_both_questions } from "./app_code_lesson_expression_choose_order_stop_early_both_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_stop_early_both_above } from "./app_code_lesson_expression_choose_order_stop_early_both_above.mjs";
export function app_code_lesson_expression_choose_order_stop_early_both() {
  arguments_assert(arguments, 0);
  ("&& and || on one line, solved as JavaScript solves them, a press at a time. false && true || true: choose the &&, then choose false, then the ||, then true");
  ("2026-10-17, at the human's asking, after Stop early on || and Stop early on &&: the one case neither of those shows, an && that goes first and skips one plain word, mixed with lines where the || is leftmost and skips the whole &&");
  let name_id =
    app_code_lesson_expression_choose_order_stop_early_both_title_name_id();
  let bank =
    app_code_lesson_expression_choose_order_stop_early_both_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_stop_early_both_above,
    bank,
  );
  return lesson;
}
