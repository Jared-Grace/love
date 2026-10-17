import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_stop_early_and_title_name_id } from "./app_code_lesson_expression_choose_order_stop_early_and_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_stop_early_and_questions } from "./app_code_lesson_expression_choose_order_stop_early_and_questions.mjs";
import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_stop_early_and_above } from "./app_code_lesson_expression_choose_order_stop_early_and_above.mjs";
export function app_code_lesson_expression_choose_order_stop_early_and() {
  arguments_assert(arguments, 0);
  ("&& solved as JavaScript solves it, a press at a time: the left side first, and when it is false, the right side never solved. false && (true || true): choose the &&, then choose false");
  ("2026-10-17, at the human's asking: one lesson for stopping early on ||, another for &&. This one comes after the parentheses lessons, because a skip on && is only visible when its right side is more than one word, and with only true, false, && and || that needs parentheses");
  let name_id =
    app_code_lesson_expression_choose_order_stop_early_and_title_name_id();
  let bank = app_code_lesson_expression_choose_order_stop_early_and_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_stop_early_and_above,
    bank,
  );
  return lesson;
}
