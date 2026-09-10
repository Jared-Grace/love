import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_three_steps_left_to_right_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a three step line whose operators are all as strong as each other, answered in one go, an Expressions lesson");
  ("The missing word is what tells it from the lesson it is the twin of, which walks the very same lines a press at a time and is titled Solve three steps left to right. The course names an interactive lesson Solve x and the lesson that asks the same thing all at once x, so the twin's title is this one with the verb put back on the front. Two lessons on one home list showing one line each and named alike would be one line read twice, with nothing on the screen to say which of them a learner had already done.");
  ("The rule is named as well as the asking, because on these lines the rule is all there is to name. A title saying only what the line looks like would have to say that every operator on it is as strong as every other, and strong is a word no screen in this course ever puts in front of a learner - it is said to them as which operators are worked out first, which is left to right here and is the title.");
  function paint(parent) {
    html_cycle_code(parent, ["Three steps left to right"]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
