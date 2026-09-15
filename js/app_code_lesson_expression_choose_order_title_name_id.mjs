import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: Choose * before +, an Expressions lesson where the order is chosen and each value is worked out for the learner");
  ("The title names the two operators every line here is built from rather than describing choosing in general, so the list says what is learned. Choose rather than Solve is the one word that sets it apart from the lesson after it, which asks for the values too.");
  function paint(parent) {
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    html_cycle_code(parent, ["Choose ", times, " before ", plus]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
