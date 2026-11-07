import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_for_same_as_while_above } from "./app_learn_js_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_total_step } from "./app_code_lesson_while_total_step.mjs";
import { app_code_lesson_total_step_generic } from "./app_code_lesson_total_step_generic.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_learn_js_lesson_for_total_step() {
  arguments_assert(arguments, 0);
  ("a running total in a for counting by more than one: let total = 0; for (let n = 1; n < 7; n += 2) { total += n; } console.log(total); writes out 9, the same as Counting by twos and threes");
  ("The one new fact is that the last part of a for can go up by more than 1 while the lines inside add up a total.");
  ("Chosen by the human 2026-11-05, as one of four for lessons after For with a running total.");
  ("It leaves out the last box of the while lesson, about even numbers and threes, picked 2026-11-05: that was taught there, and the screens below still mix them. The rejected reading was saying it again.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For counting by twos and threes",
    "for (...; n += 2) { ... }",
  );
  let above_inner = app_learn_js_lesson_for_same_as_while_above(
    app_code_lesson_while_total_step,
  );
  let lesson = app_code_lesson_total_step_generic(
    js_code_for_start_condition_update_lines,
    above_inner,
    name_id,
  );
  return lesson;
}
