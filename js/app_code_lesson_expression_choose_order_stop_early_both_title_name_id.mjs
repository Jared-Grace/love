import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_cycle_code } from "./app_code_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_stop_early_both_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: stop early on && and ||, an Expressions lesson where a learner presses one step at a time, after Stop early on || and Stop early on &&");
  ("A draft, 2026-10-17, to go to the human before the lesson ships. Said the same way as the two titles before it, so the three read as a set");
  function paint(parent) {
    app_code_cycle_code(parent, ["Stop early on ", "&&", " and ", "||"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
