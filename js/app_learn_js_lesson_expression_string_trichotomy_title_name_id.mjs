import { app_learn_js_lesson_name_id_category_then } from "./app_learn_js_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_operators_shape_list } from "./app_learn_js_operators_shape_list.mjs";
import { app_code_placeholder_tile_string } from "./app_code_placeholder_tile_string.mjs";
import { app_learn_js_category_expressions } from "./app_learn_js_category_expressions.mjs";
export function app_learn_js_lesson_expression_string_trichotomy_title_name_id(
  equals_operator,
  less_operator,
  greater_operator,
) {
  arguments_assert(arguments, 3);
  ("the home title: same, before, or after");
  function paint(parent) {
    html_span_text(parent, "Same, before, or after ");
    app_learn_js_operators_shape_list(
      parent,
      app_code_placeholder_tile_string,
      [equals_operator, less_operator, greater_operator],
    );
  }
  let left = app_learn_js_category_expressions();
  let built = app_learn_js_lesson_name_id_category_then(left, paint);
  return built;
}
