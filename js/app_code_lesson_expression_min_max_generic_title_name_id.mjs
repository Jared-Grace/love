import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_min_max_generic_title_name_id(
  noun_upper,
  called_name,
  noun,
) {
  arguments_assert(arguments, 3);
  ("the home title: {noun_upper} of two {fn}");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      let heading = text_combine(noun_upper, " of two ");
      html_span_text(parent, heading);
      html_span_text_code_dark(parent, called_name);
    }
    return render;
  }
  let right = text_combine(noun, " of two");
  let rights = [right];
  let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
  return built;
}
