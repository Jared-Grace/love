import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
export function app_code_lesson_expression_parentheses_arithmetic_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: + / - inside ( and ), an Expressions lesson");
  function paint(parent) {
    let plus = js_operator_plus_symbol();
    let minus = js_operator_minus_symbol();
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    html_cycle_code(parent, [
      "",
      plus,
      " / ",
      minus,
      " inside ",
      open,
      " and ",
      close,
    ]);
  }
  let rights = ["parentheses arithmetic"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
