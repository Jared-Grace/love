import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_code_dark_nowrap } from "./html_span_code_dark_nowrap.mjs";
import { app_code_lesson_number_chip_lifted } from "./app_code_lesson_number_chip_lifted.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_repeated_generic_short_form(
  parent,
  left,
  count,
  left_color,
  count_color,
  short_separator,
) {
  arguments_assert(arguments, 6);
  ("one dark tile reading the short form, both numbers as lifted color chips");
  let tile = html_span_code_dark_nowrap(parent);
  app_code_lesson_number_chip_lifted(tile, left, left_color);
  html_span_text(tile, short_separator);
  app_code_lesson_number_chip_lifted(tile, count, count_color);
}
