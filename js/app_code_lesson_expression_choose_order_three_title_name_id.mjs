import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_three_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a three step line where a * or a / is in among the others and goes first, an Expressions lesson");
  ("The title names the operators rather than the length, because the length is no longer what changed. The lesson before this one is also three steps long, and every operator on it is the same strength, so it is solved straight through from the left. This one always puts a * or a / somewhere in the line, so the learner has to find it before they can start.");
  ("Named by the operators because that is how the rest of the course names strength - * before + on the which-part-first lesson, && before || further on. No screen here defines the word stronger, so a title that leaned on it would be the first place a learner met it.");
  function paint(parent) {
    html_cycle_code(parent, ["Three steps, * or / first"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
