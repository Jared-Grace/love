import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_generic } from "./app_code_lesson_expression_choose_order_twin_generic.mjs";
import { app_code_lesson_expression_nested_add } from "./app_code_lesson_expression_nested_add.mjs";
export function app_code_lesson_expression_choose_order_nested_add() {
  arguments_assert(arguments, 0);
  ("three numbers joined by +, taken a press at a time before the lesson next door asks for the whole line: 3 + 4 + 5, choose the first plus, choose 7, see 7 + 5, choose the plus, choose 12");
  let symbol = js_operator_plus_symbol();
  let words = ["Solve nested ", symbol];
  let lesson = app_code_lesson_expression_choose_order_twin_generic(
    words,
    app_code_lesson_expression_nested_add,
  );
  return lesson;
}
