import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_console_log_remainder_generic_code_of } from "./app_code_lesson_console_log_remainder_generic_code_of.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_remainder_color_light } from "./app_code_remainder_color_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
export function app_code_lesson_console_log_remainder_generic_above_row(
  n,
  percent,
  divisor,
  modulo_fn,
  table,
) {
  arguments_assert(arguments, 5);
  let expr = app_code_lesson_console_log_remainder_generic_code_of(
    n,
    percent,
    divisor,
  );
  let remainder = modulo_fn(n, divisor);
  let line = html_div(table);
  let band = app_code_remainder_color_light(remainder, divisor);
  html_style_background_color_set(line, band);
  html_page_padding_x(line);
  html_style_padding_y(line, "0.35em");
  html_span_text_code_dark(line, expr);
  html_span_text(line, " is ");
  app_code_lesson_console_log_remainder_generic_remainder_chip(
    line,
    remainder,
    divisor,
  );
}
