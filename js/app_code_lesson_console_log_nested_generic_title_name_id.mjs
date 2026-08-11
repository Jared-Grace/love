import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_console_log_nested_generic_title_name_id(
  symbol,
  word,
) {
  arguments_assert(arguments, 2);
  ("the home title is console.log nested <operator>");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "Nested ");
      html_span_text_code_dark(parent, symbol);
    }
    return render;
  }
  let rights = [word];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
