import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_round_generic_title_name_id(
  direction,
  called_name,
) {
  arguments_assert(arguments, 2);
  ("the home title: Round {direction} {fn}");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      let heading = text_combine_multiple(["Round ", direction, " "]);
      html_span_text(parent, heading);
      html_span_text_code_dark(parent, called_name);
    }
    return render;
  }
  let heading_lower = text_combine("round ", direction);
  let rights = [heading_lower];
  let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
  return built;
}
