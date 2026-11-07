import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_console_log_remainder_generic_remainder_color } from "./app_learn_js_lesson_console_log_remainder_generic_remainder_color.mjs";
import { app_learn_js_lesson_number_chip } from "./app_learn_js_lesson_number_chip.mjs";
export function app_learn_js_lesson_console_log_remainder_generic_remainder_chip(
  parent,
  remainder,
  divisor,
) {
  arguments_assert(arguments, 3);
  let color = app_learn_js_lesson_console_log_remainder_generic_remainder_color(
    remainder,
    divisor,
  );
  let chip = app_learn_js_lesson_number_chip(parent, remainder, color);
  return chip;
}
