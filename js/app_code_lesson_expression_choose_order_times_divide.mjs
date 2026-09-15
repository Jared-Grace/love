import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_times_divide } from "./app_code_lesson_expression_times_divide.mjs";
export function app_code_lesson_expression_choose_order_times_divide() {
  arguments_assert(arguments, 0);
  ("* and / on one line, taken a press at a time before the lesson next door asks for the whole line: 6 * 2 / 3, choose the times, choose 12, see 12 / 3, choose the divide, choose 4");
  let times = js_operator_asterisk_symbol();
  let divided = js_operator_division_symbol();
  let words = ["Solve ", times, " ", divided];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_times_divide,
  );
  return lesson;
}
