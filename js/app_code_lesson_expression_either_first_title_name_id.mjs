import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_either_first_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: when either operator may be worked out first, an Expressions lesson");
  function paint(parent) {
    html_cycle_code(parent, ["when either operator can go first"]);
  }
  let rights = ["when either operator can go first"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
