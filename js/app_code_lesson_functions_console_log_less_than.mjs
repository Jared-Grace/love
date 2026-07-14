import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
export function app_code_lesson_functions_console_log_less_than() {
  let operator = js_operator_less_than();
  let lesson = app_code_lesson_functions_console_log_comparison(
    operator,
    "smaller",
    [" less than"],
    "Before, the answer was always a number. Now ",
  );
  return lesson;
}
