import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
export function app_code_lesson_console_log_remainder_generic_above_insight_line(
  line,
  insight_box,
  divisor,
) {
  arguments_assert(arguments, 3);
  let insight_row = html_div(insight_box);
  let text = property_get(line, "text");
  html_span_text(insight_row, text);
  let value = property_get(line, "remainder");
  app_code_lesson_console_log_remainder_generic_remainder_chip(
    insight_row,
    value,
    divisor,
  );
}
