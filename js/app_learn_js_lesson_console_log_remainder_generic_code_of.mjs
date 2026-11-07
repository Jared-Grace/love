import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
export function app_learn_js_lesson_console_log_remainder_generic_code_of(
  n,
  percent,
  divisor,
) {
  arguments_assert(arguments, 3);
  let code = js_code_binary_spaced_nb(n, percent, divisor);
  return code;
}
