import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_arithmetic_equality_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: both sides arithmetic, an Expressions lesson");
  function paint(parent) {
    html_span_text(parent, "both sides arithmetic");
  }
  let rights = ["arithmetic both sides"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
