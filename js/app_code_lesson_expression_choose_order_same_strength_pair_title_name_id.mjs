import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_same_strength_pair_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving a two-step line where the order is settled by position alone, an Expressions lesson");
  ("It is the three-step lesson's title with the count changed, and that is deliberate: the two rows say the same rule at two lengths, so a learner scanning the home list can see that the later one is not a new rule. The three-step title asked for a second row of its shape if the shape was worth keeping, and this is it.");
  ("Left to right is the wording the walk above the card already uses, word for word, when it says why a step is the one that may go. A title that named the same fact a second way would be two names for one thing at the two places a learner meets it.");
  function paint(parent) {
    html_cycle_code(parent, ["Solve two steps left to right"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
