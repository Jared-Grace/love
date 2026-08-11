import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_string_operators_shape } from "./app_code_string_operators_shape.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_string_order_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: alphabetical order");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "Alphabetical order ");
      app_code_string_operators_shape(parent, "<", ">");
    }
    return render;
  }
  let rights = ["string", "order"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
