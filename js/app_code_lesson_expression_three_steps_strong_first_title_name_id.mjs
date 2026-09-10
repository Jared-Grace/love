import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_three_steps_strong_first_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a three step line carrying an operator that has to be looked for rather than read off the left, answered in one go, an Expressions lesson");
  ("The missing word is what tells it from the lesson it is the twin of, which walks the very same lines a press at a time. The course names an interactive lesson Solve x and the lesson that asks the same thing all at once x, so the twin's title is this one with the verb put back on the front. Both lessons name the same rule because it is the same rule; what differs is whether the learner presses their way down the line or holds it.");
  ("Each of the four operators is set as its own piece of code rather than each pair being set as one, for the reason the twin's title gives: * / is not a thing that can be written in a line - it is two operators named side by side, and one box around them would say they were one expression.");
  let times = js_operator_asterisk_symbol();
  let divided = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  function paint(parent) {
    html_cycle_code(parent, [
      "Three steps, ",
      times,
      " ",
      divided,
      " before ",
      plus,
      " ",
      minus,
    ]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
