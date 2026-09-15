import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_which_part_first_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: * / before + -, an Expressions lesson");
  ("The title names every operator the lesson mixes rather than one pair as an example, read off the same two classes the lesson draws its lines from, so widening a class widens the title with it.");
  function paint(parent) {
    let strong = app_code_operators_strong();
    let strong_said = list_join_space(strong);
    let weak = app_code_operators_weak();
    let weak_said = list_join_space(weak);
    html_cycle_code(parent, ["", strong_said, " before ", weak_said]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
