import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { app_code_comparison_pair_equality } from "./app_code_comparison_pair_equality.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_equals() {
  let operator = js_operator_triple_equal();
  let symbol = property_get(operator, "operator");
  let pair = app_code_comparison_pair_equality();
  let sum = js_code_binary_spaced_nb(1, js_operator_plus_symbol(), 2);
  let math_line = js_code_binary_spaced_nb(sum, "=", 3);
  let code_line = js_code_binary_spaced_nb(sum, symbol, 3);
  let preamble = [
    ["In math, we write: ", math_line],
    ["In code, we write: ", code_line],
  ];
  let explanation = [
    ["", symbol, " is ", js_keyword_true(), " only when both sides are the same number"],
  ];
  function closing(fn_name) {
    let parts = [
      "",
      symbol,
      " means the same — a single ",
      "=",
      " means something else you will learn later",
    ];
    return parts;
  }
  let lesson = app_code_lesson_functions_console_log_comparison({
    operator,
    question_middle: "exactly equal to",
    pair,
    name_id_rights: [" equal to"],
    closing,
    preamble,
    explanation,
  });
  return lesson;
}
