import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
export function app_code_lesson_expression_remainder_divide_solve_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title is console.log solve the remainder formula");
  function paint(parent) {
    html_span_text(parent, "Solve the remainder formula");
  }
  let rights = ["solve the remainder formula"];
  let left = app_code_category_operators();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
