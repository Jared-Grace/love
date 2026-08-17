import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_console_log_remainder_generic_above_closing } from "./app_code_lesson_console_log_remainder_generic_above_closing.mjs";
import { html_div } from "./html_div.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_console_log_remainder_generic_above_alternates(
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
  let r = {
    closing_line,
    alternates,
  };
  return r;
}
