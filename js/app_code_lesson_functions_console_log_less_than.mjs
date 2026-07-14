import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
export function app_code_lesson_functions_console_log_less_than() {
  let operator = js_operator_less_than();
  function closing(fn_name) {
    let parts = [
      "Before, the answer was always a number. Now ",
      fn_name,
      " will write out ",
      js_keyword_true(),
      " or ",
      js_keyword_false(),
    ];
    return parts;
  }
  let lesson = app_code_lesson_functions_console_log_comparison(
    operator,
    "smaller",
    [" less than"],
    closing,
  );
  return lesson;
}
