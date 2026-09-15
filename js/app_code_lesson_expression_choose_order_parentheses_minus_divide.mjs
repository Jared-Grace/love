import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_expression_choose_order_twin_read_generic } from "./app_code_lesson_expression_choose_order_twin_read_generic.mjs";
import { app_code_lesson_expression_parentheses_minus_divide } from "./app_code_lesson_expression_parentheses_minus_divide.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
export function app_code_lesson_expression_choose_order_parentheses_minus_divide() {
  arguments_assert(arguments, 0);
  ("( and ) on the right of a - or a /, taken a press at a time before the lesson next door asks for the whole line: 14 - (7 - 2), choose the inner minus, choose 5, see 14 - 5, choose the minus, choose 9");
  ("Every line the lesson next door writes carries one pair of marks round the last two numbers, and the marks are always needed there, so the line printed back from its shape is the line the twin wrote.");
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let minus = js_operator_minus_symbol();
  let divided = js_operator_division_symbol();
  let words = [
    "Solve ",
    open,
    " and ",
    close,
    " after ",
    minus,
    " or ",
    divided,
  ];
  let lesson = app_code_lesson_expression_choose_order_twin_read_generic(
    words,
    app_code_lesson_expression_parentheses_minus_divide,
    app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code,
    app_code_expression_value_decoys,
  );
  return lesson;
}
