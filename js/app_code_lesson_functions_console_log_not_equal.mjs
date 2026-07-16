import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { app_code_comparison_pair_inequality } from "./app_code_comparison_pair_inequality.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_not_equal() {
  let operator = js_operator_bang_double_equal();
  let symbol = property_get(operator, "operator");
  let pair = app_code_comparison_pair_inequality();
  let equal_symbol = js_operator_triple_equal_symbol();
  function closing(fn_name) {
    let parts = [
      "",
      symbol,
      " is like ",
      equal_symbol,
      ", but asks if the two sides are different",
    ];
    return parts;
  }
  let lesson = app_code_lesson_functions_console_log_comparison({
    operator,
    question_middle: "different from",
    pair,
    name_id_rights: [" not equal to"],
    closing,
    preamble: null,
    explanation: null,
  });
  return lesson;
}
