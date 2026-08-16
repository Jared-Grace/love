import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_solve_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: choosing the order to solve in and working each step out, an Expressions lesson");
  function paint(parent) {
    html_cycle_code(parent, ["solving each step yourself"]);
  }
  let rights = ["solving each step yourself"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
