import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_expression_parentheses_arithmetic_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: + / - inside ( and ), an Expressions lesson");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
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
    return render;
  }
  let rights = ["parentheses arithmetic"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_generic(rights, left, title_get);
  return built;
}
