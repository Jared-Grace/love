import { property_get } from "./property_get.mjs";
import { app_code_lesson_console_log_remainder_generic_above_alternates } from "./app_code_lesson_console_log_remainder_generic_above_alternates.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
export function app_code_lesson_console_log_remainder_generic_above(
  root,
  divisor,
  divisor_text,
  percent,
  modulo_fn,
  insight,
) {
  arguments_assert(arguments, 6);
  let r = app_code_lesson_console_log_remainder_generic_above_alternates(
    root,
    divisor,
    divisor_text,
    percent,
    modulo_fn,
    insight,
  );
  let alternates = property_get(r, "alternates");
  let closing_line = property_get(r, "closing_line");
  if (alternates) {
    html_span_text(closing_line, "The remainder alternates between ");
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      closing_line,
      0,
      divisor,
    );
    html_span_text(closing_line, " and ");
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      closing_line,
      1,
      divisor,
    );
  } else {
    html_span_text(
      closing_line,
      "The remainder counts up, then starts over at ",
    );
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      closing_line,
      0,
      divisor,
    );
  }
}
