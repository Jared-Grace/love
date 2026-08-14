import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: choosing which operator to work out first, and then the next, an Expressions lesson");
  function paint(parent) {
    html_cycle_code(parent, ["choosing the order to solve in"]);
  }
  let rights = ["choosing the order to solve in"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
