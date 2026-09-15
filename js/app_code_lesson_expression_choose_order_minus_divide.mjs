import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_minus_divide } from "./app_code_lesson_expression_minus_divide.mjs";
export function app_code_lesson_expression_choose_order_minus_divide() {
  arguments_assert(arguments, 0);
  ("- and / on one line, taken a press at a time before the lesson next door asks for the whole line: 9 - 8 / 4, choose the divide, choose 2, see 9 - 2, choose the minus, choose 7");
  let minus = js_operator_minus_symbol();
  let divided = js_operator_division_symbol();
  let words = ["Solve ", minus, " ", divided];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_minus_divide,
  );
  return lesson;
}
