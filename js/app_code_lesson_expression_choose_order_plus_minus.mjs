import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_plus_minus } from "./app_code_lesson_expression_plus_minus.mjs";
export function app_code_lesson_expression_choose_order_plus_minus() {
  arguments_assert(arguments, 0);
  ("+ and - on one line, taken a press at a time before the lesson next door asks for the whole line: 5 + 2 - 3, choose the plus, choose 7, see 7 - 3, choose the minus, choose 4");
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let words = ["Solve ", plus, " ", minus];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_plus_minus,
  );
  return lesson;
}
