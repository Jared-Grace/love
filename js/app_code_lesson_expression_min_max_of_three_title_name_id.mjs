import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_min_max_of_three_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: more than two numbers");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text_code_dark(parent, "Math.max");
      html_span_text(parent, ", ");
      html_span_text_code_dark(parent, "Math.min");
      html_span_text(parent, " 3 numbers");
    }
    return render;
  }
  let rights = ["more than two numbers"];
  let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
  return built;
}
