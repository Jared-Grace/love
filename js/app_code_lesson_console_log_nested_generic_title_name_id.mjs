import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_console_log_nested_generic_title_name_id(
  symbol,
  word,
) {
  arguments_assert(arguments, 2);
  ("the home title is console.log nested <operator>");
  function paint(parent) {
    html_span_text(parent, "Nested ");
    html_span_text_code_dark(parent, symbol);
  }
  let rights = [word];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
