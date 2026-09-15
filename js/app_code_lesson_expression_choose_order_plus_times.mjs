import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_plus_times } from "./app_code_lesson_expression_plus_times.mjs";
export function app_code_lesson_expression_choose_order_plus_times() {
  arguments_assert(arguments, 0);
  ("+ and * on one line, taken a press at a time before the lesson next door asks for the whole line: 2 + 3 * 4, choose the times, choose 12, see 2 + 12, choose the plus, choose 14");
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let words = ["Solve ", plus, " ", times];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_plus_times,
  );
  return lesson;
}
