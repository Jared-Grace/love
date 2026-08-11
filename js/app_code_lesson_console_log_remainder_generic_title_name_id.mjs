import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_console_log_remainder_generic_title_name_id(
  percent,
  divisor_text,
  name_right,
) {
  arguments_assert(arguments, 3);
  ("the home title puts the operator glyph % right after the operator name 'remainder', before the 'by <divisor>' qualifier: console.log remainder % by 2");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "Remainder ");
      html_span_text_code_dark(parent, percent);
      let by = text_combine(" by ", divisor_text);
      html_span_text(parent, by);
    }
    return render;
  }
  let rights = [name_right];
  let left = app_code_category_operators();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
