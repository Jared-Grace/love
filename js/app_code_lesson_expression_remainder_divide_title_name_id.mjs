import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
export function app_code_lesson_expression_remainder_divide_title_name_id(
  percent,
) {
  arguments_assert(arguments, 1);
  ("the home title is console.log remainder by dividing %");
  function paint(parent) {
    html_span_text(parent, "Remainder by dividing ");
    html_span_text_code_dark(parent, percent);
  }
  let rights = ["remainder by dividing"];
  let left = app_code_category_operators();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
