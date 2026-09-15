import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_nested_subtract } from "./app_code_lesson_expression_nested_subtract.mjs";
export function app_code_lesson_expression_choose_order_nested_subtract() {
  arguments_assert(arguments, 0);
  ("three numbers joined by -, taken a press at a time before the lesson next door asks for the whole line: 9 - 3 - 2, choose the first minus, choose 6, see 6 - 2, choose the minus, choose 4");
  let symbol = js_operator_minus_symbol();
  let words = ["Solve nested ", symbol];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_nested_subtract,
  );
  return lesson;
}
