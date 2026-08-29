import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_remainder_any_title_name_id(
  percent,
) {
  arguments_assert(arguments, 1);
  ("the home title is console.log remainder % (no 'by <divisor>', since the divisor now varies)");
  function paint(parent) {
    html_span_text(parent, "Remainder ");
    html_span_text_code_dark(parent, percent);
  }
  let built = app_code_lesson_name_id_operators(paint);
  return built;
}
