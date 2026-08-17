import { app_code_lesson_console_log_remainder_generic_above_closing } from "./app_code_lesson_console_log_remainder_generic_above_closing.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_console_log_remainder_generic_above(
  root,
  divisor,
  divisor_text,
  percent,
  modulo_fn,
  insight,
) {
  arguments_assert(arguments, 6);
  let closing = app_code_lesson_console_log_remainder_generic_above_closing(
    root,
    divisor,
    divisor_text,
    percent,
    modulo_fn,
    insight,
  );
  let closing_line = html_div(closing);
  let alternates = equal(divisor, 2);
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
