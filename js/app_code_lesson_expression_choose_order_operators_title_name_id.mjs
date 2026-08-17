import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_operators_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving a line step by step where the operators can be minus and divide as well, an Expressions lesson");
  ("The title names the two operators that are new here rather than saying all four, because a learner reading the list is looking for what they have not done yet - and the two they have done are the ones the two lessons above this on the list are already named for.");
  function paint(parent) {
    html_cycle_code(parent, ["solving steps with minus and divide"]);
  }
  let rights = ["solving steps with minus and divide"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
