import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
export function app_code_lesson_expression_integer_division_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title is console.log integer division");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "Integer division");
    }
    return render;
  }
  let rights = ["integer division"];
  let left = app_code_category_operators();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
