import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_lesson_expression_string_concat_above_space_line(r2) {
  arguments_assert(arguments, 1);
  let after_line = property_get(r2, "after_line");
  let order = property_get(r2, "order");
  let joined_value = property_get(r2, "joined_value");
  html_span_text_code_dark(after_line, "+");
  html_span_text(
    after_line,
    " puts the right string immediately after the left string",
  );
  let space_line = html_div(order);
  let r = {
    joined_value,
    space_line,
  };
  return r;
}
