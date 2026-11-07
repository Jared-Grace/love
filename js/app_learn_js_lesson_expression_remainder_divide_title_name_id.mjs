import { app_code_title_remainder_percent_paint } from "./app_code_title_remainder_percent_paint.mjs";
import { app_learn_js_lesson_name_id_operators } from "./app_learn_js_lesson_name_id_operators.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_learn_js_lesson_expression_remainder_divide_title_name_id(
  percent,
) {
  arguments_assert(arguments, 1);
  ("the home title is console.log Remainder (%) by dividing");
  function paint(parent) {
    app_code_title_remainder_percent_paint(parent, percent);
    html_span_text(parent, " by dividing");
  }
  let built = app_learn_js_lesson_name_id_operators(paint);
  return built;
}
