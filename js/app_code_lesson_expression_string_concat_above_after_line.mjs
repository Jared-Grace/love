import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_lesson_expression_string_concat_above_after_line(r) {
  arguments_assert(arguments, 1);
  let right_line = property_get(r, "right_line");
  let code_b = property_get(r, "code_b");
  let joined_value = property_get(r, "joined_value");
  let order = property_get(r, "order");
  html_span_text(right_line, "The right string is ");
  html_span_text_code_dark(right_line, code_b);
  let after_line = html_div(order);
  let r2 = {
    joined_value,
    order,
    after_line,
  };
  return r2;
}
