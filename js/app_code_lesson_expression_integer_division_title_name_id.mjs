import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_integer_division_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title is console.log integer division");
  function paint(parent) {
    html_span_text(parent, "Integer division");
  }
  let built = app_code_lesson_name_id_operators(paint);
  return built;
}
