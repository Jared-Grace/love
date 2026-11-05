import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_update_log_generic } from "./app_code_lesson_update_log_generic.mjs";
import { app_code_lesson_up_to_log_options } from "./app_code_lesson_up_to_log_options.mjs";
import { app_code_lesson_for_same_as_while_above } from "./app_code_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_up_to } from "./app_code_lesson_while_up_to.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_code_lesson_for_up_to() {
  arguments_assert(arguments, 0);
  ("<= in a for: for (let n = 1; n <= 3; n++) { console.log(n); } writes out 1, 2 and 3, the same as Up to and including");
  ("The one new fact is that <= works in a for the way it did in a while, so the number compared against is written out too.");
  ("Chosen by the human 2026-11-05, as one of four for lessons after For with a running total, each from a while lesson whose program says the same as a for. While lessons writing out n after the loop were left out, since n made in a for is gone by then.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For up to and including",
    "for (...; n <= 3; n++) { ... }",
  );
  let lesson = app_code_lesson_update_log_generic({
    ...app_code_lesson_up_to_log_options(),
    name_id,
    above: app_code_lesson_for_same_as_while_above(app_code_lesson_while_up_to),
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
