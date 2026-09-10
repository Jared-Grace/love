import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_pair_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving three comparisons one step at a time, an Expressions lesson");
  ("Three, not two. Every line this lesson hands out carries three comparison signs - one inside each parenthesis, drawn from ===, !==, < and >, and one between them that is === or !==. The title used to say two, which counted the two being compared and left out the one comparing them, so a learner reading (4 > 2) === (5 !== 7) could see a sign the title did not admit to.");
  ("It echoes the three steps lessons just behind it, which is the point of saying three rather than naming the shape: the same count of signs again, and this time every one of them a comparison.");
  function paint(parent) {
    html_cycle_code(parent, ["Solve three comparisons"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
