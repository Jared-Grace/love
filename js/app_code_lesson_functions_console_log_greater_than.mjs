import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_greater_than() {
  let operator = js_operator_greater_than();
  let symbol = property_get(operator, "operator");
  let less_symbol = property_get(js_operator_less_than(), "operator");
  function closing(fn_name) {
    let parts = ["", symbol, " is like ", less_symbol];
    return parts;
  }
  let lesson = app_code_lesson_functions_console_log_comparison({
    operator,
    compare_word: "bigger",
    name_id_rights: [" greater than"],
    closing,
    explanation: null,
  });
  return lesson;
}
