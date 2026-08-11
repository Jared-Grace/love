import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_absolute_value_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title is console.log absolute value");
  function paint(parent) {
    html_span_text(parent, "Absolute value ");
    html_span_text_code_dark(parent, "Math.abs");
  }
  let rights = ["absolute value"];
  let built = app_code_lesson_name_id_category_then(rights, "functions", paint);
  return built;
}
