import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { app_code_comparison_pair_relational } from "./app_code_comparison_pair_relational.mjs";
import { js_operator_less_than_equal } from "./js_operator_less_than_equal.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_less_than_equal() {
  let operator = js_operator_less_than_equal();
  let symbol = property_get(operator, "operator");
  let fn = property_get(operator, "fn");
  let pair = app_code_comparison_pair_relational(fn);
  let less_symbol = property_get(js_operator_less_than(), "operator");
  let equal_symbol = property_get(js_operator_triple_equal(), "operator");
  let explanation = [
    [
      "Even when the two sides are the same, ",
      symbol,
      " is ",
      js_keyword_true(),
    ],
  ];
  function closing(fn_name) {
    let parts = [
      "",
      symbol,
      " is ",
      js_keyword_true(),
      " when ",
      less_symbol,
      " is ",
      js_keyword_true(),
      ", or when ",
      equal_symbol,
      " is ",
      js_keyword_true(),
    ];
    return parts;
  }
  let lesson = app_code_lesson_functions_console_log_comparison({
    operator,
    question_middle: "less than or equal to",
    pair,
    name_id_rights: [" less than or equal to"],
    closing,
    preamble: null,
    explanation,
  });
  return lesson;
}
