import { app_learn_js_title_remainder_percent_paint } from "./app_learn_js_title_remainder_percent_paint.mjs";
import { app_learn_js_lesson_name_id_operators } from "./app_learn_js_lesson_name_id_operators.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_learn_js_lesson_expression_remainder_any_title_name_id(
  percent,
) {
  arguments_assert(arguments, 1);
  ("the home title is console.log remainder % (no 'by <divisor>', since the divisor now varies)");
  function paint(parent) {
    app_learn_js_title_remainder_percent_paint(parent, percent);
  }
  let built = app_learn_js_lesson_name_id_operators(paint);
  return built;
}
