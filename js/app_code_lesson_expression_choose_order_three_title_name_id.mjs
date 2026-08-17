import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_three_title_name_id() {
  arguments_assert(arguments, 0);
  (
    "the home title: solving a line that takes three steps rather than two, an Expressions lesson"
  );
  (
    "The title names the length, because that is the one thing that changed. A learner reading the list has already done the operators and the choosing; what they have not done is keep going after the second step."
  );
  function paint(parent) {
    html_cycle_code(parent, ["solving three steps in a row"]);
  }
  let rights = ["solving three steps in a row"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
