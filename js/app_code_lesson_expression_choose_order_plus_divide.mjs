import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_plus_divide } from "./app_code_lesson_expression_plus_divide.mjs";
export function app_code_lesson_expression_choose_order_plus_divide() {
  arguments_assert(arguments, 0);
  ("+ and / on one line, taken a press at a time before the lesson next door asks for the whole line: 2 + 8 / 4, choose the divide, choose 2, see 2 + 2, choose the plus, choose 4");
  let plus = js_operator_plus_symbol();
  let divided = js_operator_division_symbol();
  let words = ["Solve ", plus, " ", divided];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_plus_divide,
  );
  return lesson;
}
