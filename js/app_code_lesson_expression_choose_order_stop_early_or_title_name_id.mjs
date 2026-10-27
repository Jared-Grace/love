import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_cycle_code } from "./app_code_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_stop_early_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: stop early on ||, an Expressions lesson where a learner presses one step at a time; its pair, stop early on &&, comes after the parentheses lessons");
  ("A draft, 2026-10-17: the title and every sentence of this lesson go to the human before the lesson ships. Stop early is said rather than short circuit, because it says what happens in words a beginner already has. Not picked: Short circuit, the name programmers use, which says nothing to someone who has not met it; Skip the right side, which is only half of it, since the left is still solved first");
  function paint(parent) {
    app_code_cycle_code(parent, ["Stop early on ", "||"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
