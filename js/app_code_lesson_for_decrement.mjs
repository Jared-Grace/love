import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_update_log_generic } from "./app_code_lesson_update_log_generic.mjs";
import { app_learn_js_lesson_decrement_log_options } from "./app_learn_js_lesson_decrement_log_options.mjs";
import { app_code_lesson_for_same_as_while_above } from "./app_code_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_decrement } from "./app_code_lesson_while_decrement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_code_lesson_for_decrement() {
  arguments_assert(arguments, 0);
  ("n-- in a for: for (let n = 3; n > 0; n--) { console.log(n); } writes out 3, 2 and 1, the same as While taking away one");
  ("The one new fact is that a for can count down, by n--, the way a while already did. It comes straight after For adding one, in the order agreed with the human 2026-11-04.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For taking away one",
    "for (...; n--) { ... }",
  );
  let lesson = app_code_lesson_update_log_generic({
    ...app_learn_js_lesson_decrement_log_options(),
    name_id,
    above: app_code_lesson_for_same_as_while_above(
      app_code_lesson_while_decrement,
    ),
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
