import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_solve_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: Solve * before +, an Expressions lesson where the order is chosen and each value is worked out by the learner");
  ("The same two operators as the lesson before it, named the same way, with Solve in place of Choose because working out each value is the one thing added.");
  function paint(parent) {
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    html_cycle_code(parent, ["Solve ", times, " before ", plus]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
