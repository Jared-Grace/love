import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_string_concat_above_order } from "./app_code_lesson_expression_string_concat_above_order.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_string_concat_above_right_line(
  root,
) {
  arguments_assert(arguments, 1);
  let r = app_code_lesson_expression_string_concat_above_order(root);
  let order = property_get(r, "order");
  let joined_value = property_get(r, "joined_value");
  let code_b = property_get(r, "code_b");
  let code_a = property_get(r, "code_a");
  let left_line = html_div(order);
  html_span_text(left_line, "The left string is ");
  html_span_text_code_dark(left_line, code_a);
  let right_line = html_div(order);
  let r2 = {
    order,
    joined_value,
    code_b,
    right_line,
  };
  return r2;
}
