import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_up_to_log_options } from "./app_learn_js_lesson_up_to_log_options.mjs";
import { app_learn_js_lesson_for_comparison_other_above } from "./app_learn_js_lesson_for_comparison_other_above.mjs";
import { app_learn_js_lesson_for_increment } from "./app_learn_js_lesson_for_increment.mjs";
import { app_learn_js_lesson_increment_log_options } from "./app_learn_js_lesson_increment_log_options.mjs";
import { app_learn_js_lesson_update_log_generic } from "./app_learn_js_lesson_update_log_generic.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_learn_js_lesson_for_up_to() {
  arguments_assert(arguments, 0);
  ("<= in a for: for (let n = 1; n <= 3; n++) { console.log(n); } writes out 1, 2 and 3, the same as for (let n = 1; n < 4; n++) { console.log(n); } from For adding one");
  ("The one new fact is that < leaves out the number it is compared with and <= includes it, seen in a for.");
  ("Chosen by the human 2026-11-05, as one of four for lessons after For with a running total. While lessons writing out n after the loop were left out, since n made in a for is gone by then.");
  ("Starts from For adding one and not from the while in Up to and including, picked by the human 2026-11-05: the two for programs differ only in the comparison, so that lesson is the nearer one. The rejected readings were removing this lesson, and leaving it pointing back at the while.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "For up to and including",
    "for (...; n <= 3; n++) { ... }",
  );
  let options = app_learn_js_lesson_up_to_log_options();
  let earlier = app_learn_js_lesson_increment_log_options();
  let above = app_learn_js_lesson_for_comparison_other_above(
    app_learn_js_lesson_for_increment,
    earlier,
    options,
  );
  let lesson = app_learn_js_lesson_update_log_generic({
    ...options,
    name_id,
    above,
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
