import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_string_operators_shape } from "./app_code_string_operators_shape.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_string_equality_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: comparing strings");
  function paint(parent) {
    html_span_text(parent, "Comparing strings ");
    app_code_string_operators_shape(parent, "===", "!==");
  }
  let rights = ["string", "equality"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
