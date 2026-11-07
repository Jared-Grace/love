import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_down_to_log_options } from "./app_learn_js_lesson_down_to_log_options.mjs";
import { app_learn_js_lesson_decrement_log_options } from "./app_learn_js_lesson_decrement_log_options.mjs";
import { app_learn_js_lesson_for_comparison_other_above } from "./app_learn_js_lesson_for_comparison_other_above.mjs";
import { app_code_lesson_for_decrement } from "./app_code_lesson_for_decrement.mjs";
import { app_code_lesson_update_log_generic } from "./app_code_lesson_update_log_generic.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_code_lesson_for_down_to() {
  arguments_assert(arguments, 0);
  (">= in a for: for (let n = 3; n >= 1; n--) { console.log(n); } writes out 3, 2 and 1, the same as for (let n = 3; n > 0; n--) { console.log(n); } from For taking away one");
  ("The one new fact is that > leaves out the number it is compared with and >= includes it, seen in a for counting down. Arrays are walked from the last item down to 0 this way.");
  ("Chosen by the human 2026-11-06, as one of three for lessons arrays need, paralleling While asking >=. That while writes out n after the loop, which a for cannot, since n made in a for is gone by then; so this lesson writes out n inside, and starts from For taking away one, the way For up to and including starts from For adding one.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For down to and including",
    "for (...; n >= 1; n--) { ... }",
  );
  let options = app_learn_js_lesson_down_to_log_options();
  let earlier = app_learn_js_lesson_decrement_log_options();
  let above = app_learn_js_lesson_for_comparison_other_above(
    app_code_lesson_for_decrement,
    earlier,
    options,
  );
  let lesson = app_code_lesson_update_log_generic({
    ...options,
    name_id,
    above,
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
