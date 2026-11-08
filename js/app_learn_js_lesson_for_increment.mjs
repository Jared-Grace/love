import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_update_log_generic } from "./app_learn_js_lesson_update_log_generic.mjs";
import { app_learn_js_lesson_increment_log_options } from "./app_learn_js_lesson_increment_log_options.mjs";
import { app_learn_js_lesson_for_same_as_while_above } from "./app_learn_js_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_increment } from "./app_code_lesson_while_increment.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_learn_js_lesson_for_increment() {
  arguments_assert(arguments, 0);
  ("n++ in a for: for (let n = 1; n < 4; n++) { console.log(n); } writes out 1, 2 and 3, the same as While adding one");
  ("The one new fact is that a for can change n by n++, the way a while already did. It comes straight after For with a start, since it asks nothing the while lesson did not, at the human's asking 2026-11-04: combinations of for with what is already known come right after the for itself.");
  ("The code before and after, then one line saying they do the same, in the shape the human asked for on the second for.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "For adding one",
    "for (...; n++) { ... }",
  );
  let lesson = app_learn_js_lesson_update_log_generic({
    ...app_learn_js_lesson_increment_log_options(),
    name_id,
    above: app_learn_js_lesson_for_same_as_while_above(
      app_code_lesson_while_increment,
    ),
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
