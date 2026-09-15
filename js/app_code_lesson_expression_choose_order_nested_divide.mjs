import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_nested_divide } from "./app_code_lesson_expression_nested_divide.mjs";
export function app_code_lesson_expression_choose_order_nested_divide() {
  arguments_assert(arguments, 0);
  ("three numbers joined by /, taken a press at a time before the lesson next door asks for the whole line: 12 / 3 / 2, choose the first divide, choose 4, see 4 / 2, choose the divide, choose 2");
  let symbol = js_operator_division_symbol();
  let words = ["Solve nested ", symbol];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_nested_divide,
  );
  return lesson;
}
