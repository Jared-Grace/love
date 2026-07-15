import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { app_code_comparison_pair_equality } from "./app_code_comparison_pair_equality.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_equals() {
  let operator = js_operator_triple_equal();
  let symbol = property_get(operator, "operator");
  let pair = app_code_comparison_pair_equality();
  function closing(fn_name) {
    let parts = [
      "",
      symbol,
      " means exactly equal — a single ",
      "=",
      " means something different you will learn later",
    ];
    return parts;
  }
  let explanation = [["It is true only when both sides are the same number"]];
  let lesson = app_code_lesson_functions_console_log_comparison({
    operator,
    question_middle: "exactly equal to",
    pair,
    name_id_rights: [" equal to"],
    closing,
    explanation,
  });
  return lesson;
}
