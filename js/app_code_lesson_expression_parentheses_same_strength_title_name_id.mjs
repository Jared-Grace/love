import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_parentheses_same_strength_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ( and ) after a - or a /, an Expressions lesson. The outer operator is what the title names, because it is the outer operator that decides whether the brackets change the answer");
  function paint(parent) {
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let minus = js_operator_minus_symbol();
    let divided = js_operator_division_symbol();
    html_cycle_code(parent, [
      "",
      open,
      " and ",
      close,
      " after ",
      minus,
      " or ",
      divided,
    ]);
  }
  let rights = ["parentheses same strength"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
