import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
export function app_code_lesson_expression_remainder_divide_title_name_id(
  percent,
) {
  arguments_assert(arguments, 1);
  ("the home title is console.log remainder by dividing %");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "Remainder by dividing ");
      html_span_text_code_dark(parent, percent);
    }
    return render;
  }
  let rights = ["remainder by dividing"];
  let left = app_code_category_operators();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
