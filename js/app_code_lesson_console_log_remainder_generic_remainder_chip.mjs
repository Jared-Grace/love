import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_color } from "./app_code_lesson_console_log_remainder_generic_remainder_color.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
export function app_code_lesson_console_log_remainder_generic_remainder_chip(
  parent,
  remainder,
  divisor,
) {
  arguments_assert(arguments, 3);
  let color = app_code_lesson_console_log_remainder_generic_remainder_color(
    remainder,
    divisor,
  );
  let chip = app_code_lesson_number_chip(parent, remainder, color);
  return chip;
}
