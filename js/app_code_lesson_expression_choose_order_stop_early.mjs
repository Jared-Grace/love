import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_stop_early_title_name_id } from "./app_code_lesson_expression_choose_order_stop_early_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_stop_early_questions } from "./app_code_lesson_expression_choose_order_stop_early_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_stop_early_above } from "./app_code_lesson_expression_choose_order_stop_early_above.mjs";
export function app_code_lesson_expression_choose_order_stop_early() {
  arguments_assert(arguments, 0);
  ("&& and || solved as JavaScript solves them, a press at a time: the left side first, and once it decides the answer, the right side never solved. true || false && false: choose the ||, then choose true");
  ("2026-10-17, at the human's asking. Every lesson before this solves both sides of an && or an || first, a beginner's rule with the same answer on every line they draw. This lesson is where JavaScript's own order is taught, and the press it accepts is JavaScript's only. It comes straight after && before ||, because its traps are about that rule: the || going first on true || false && false, and the && still going first on false && true || true");
  let name_id =
    app_code_lesson_expression_choose_order_stop_early_title_name_id();
  let bank = app_code_lesson_expression_choose_order_stop_early_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_stop_early_above,
    bank,
  );
  return lesson;
}
