import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_operators_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: Solve * / before + -, an Expressions lesson where a line may hold any of the four arithmetic operators");
  ("The title names all four operators rather than only the two new here: the two lessons before it are named Choose * before + and Solve * before +, so the list itself shows what widened. The symbols are read off the same two classes the questions draw from, so widening a class widens the title with it.");
  function paint(parent) {
    let strong = app_code_operators_strong();
    let strong_said = list_join_space(strong);
    let weak = app_code_operators_weak();
    let weak_said = list_join_space(weak);
    html_cycle_code(parent, ["Solve ", strong_said, " before ", weak_said]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
