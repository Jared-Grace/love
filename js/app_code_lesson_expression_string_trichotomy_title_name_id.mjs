import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_operators_shape_list } from "./app_code_operators_shape_list.mjs";
import { app_code_placeholder_tile_string } from "./app_code_placeholder_tile_string.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_string_trichotomy_title_name_id(
  equals_operator,
  less_operator,
  greater_operator,
) {
  arguments_assert(arguments, 3);
  ("the home title: same, before, or after");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      html_span_text(parent, "Same, before, or after ");
      app_code_operators_shape_list(parent, app_code_placeholder_tile_string, [
        equals_operator,
        less_operator,
        greater_operator,
      ]);
    }
    return render;
  }
  let rights = ["string", "trichotomy"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
