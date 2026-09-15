import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_nested_multiply } from "./app_code_lesson_expression_nested_multiply.mjs";
export function app_code_lesson_expression_choose_order_nested_multiply() {
  arguments_assert(arguments, 0);
  ("three numbers joined by *, taken a press at a time before the lesson next door asks for the whole line: 2 * 3 * 4, choose the first times, choose 6, see 6 * 4, choose the times, choose 24");
  let symbol = js_operator_asterisk_symbol();
  let words = ["Solve nested ", symbol];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_nested_multiply,
  );
  return lesson;
}
