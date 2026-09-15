import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_minus_times } from "./app_code_lesson_expression_minus_times.mjs";
export function app_code_lesson_expression_choose_order_minus_times() {
  arguments_assert(arguments, 0);
  ("- and * on one line, taken a press at a time before the lesson next door asks for the whole line: 9 - 2 * 3, choose the times, choose 6, see 9 - 6, choose the minus, choose 3");
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let words = ["Solve ", minus, " ", times];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_minus_times,
  );
  return lesson;
}
