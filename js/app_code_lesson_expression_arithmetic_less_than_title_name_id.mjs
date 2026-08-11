import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_arithmetic_less_than_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title is arithmetic comparisons, an Expressions lesson; the id string stays 'arithmetic less than' so a student's saved progress on this lesson is unchanged");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "arithmetic comparisons");
    }
    return render;
  }
  let rights = ["arithmetic less than"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
