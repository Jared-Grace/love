import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_remainder_color } from "./app_code_remainder_color.mjs";
export function app_code_lesson_console_log_remainder_generic_remainder_color(
  remainder,
  divisor,
) {
  arguments_assert(arguments, 2);
  let color = app_code_remainder_color(remainder, divisor);
  return color;
}
