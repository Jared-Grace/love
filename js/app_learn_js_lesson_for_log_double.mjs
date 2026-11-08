import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_log_double_generic } from "./app_learn_js_lesson_log_double_generic.mjs";
import { app_learn_js_lesson_for_same_as_while_above } from "./app_learn_js_lesson_for_same_as_while_above.mjs";
import { app_learn_js_lesson_while_log_double } from "./app_learn_js_lesson_while_log_double.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_learn_js_lesson_for_log_double() {
  arguments_assert(arguments, 0);
  ("a for that writes out double n: for (let n = 1; n < 3; n++) { console.log(n * 2); } writes out 2 and 4, the same as Writing out double");
  ("The one new fact is that a console.log inside a for can do math on n, and that the math does not change n: only the for's last part does. Walking an array writes out a[i] the same way.");
  ("Chosen by the human 2026-11-06, as one of three for lessons arrays need.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "For writing out double",
    "console.log(n * 2);",
  );
  let lesson = app_learn_js_lesson_log_double_generic({
    name_id,
    above: app_learn_js_lesson_for_same_as_while_above(
      app_learn_js_lesson_while_log_double,
    ),
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
