import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
export function app_code_lesson_functions_console_log_greater_than() {
  let operator = js_operator_greater_than();
  let lesson = app_code_lesson_functions_console_log_comparison(
    operator,
    "bigger",
    [" greater than"],
  );
  return lesson;
}
