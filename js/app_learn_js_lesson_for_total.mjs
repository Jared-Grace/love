import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_code_lesson_total_up_generic } from "./app_code_lesson_total_up_generic.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { app_learn_js_lesson_for_same_as_while_above } from "./app_learn_js_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_total } from "./app_code_lesson_while_total.mjs";
export function app_learn_js_lesson_for_total() {
  arguments_assert(arguments, 0);
  ("a for adding up a total: let total = 0; for (let n = 1; n < 4; n += 1) { total += n; } console.log(total); writes out 6, the same as A running total");
  ("The one new fact is that a name can stand outside a for, so the for can add to it each run and it can be written out afterwards. It comes straight after For the same word each run, in the order agreed with the human 2026-11-04.");
  ("It keeps n += 1 rather than n++, picked 2026-11-05: the while it is set beside has n += 1, so the two programs differ only by being a while and a for. The rejected reading was n++, which would ask the reader to see two changes at once.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "For with a running total",
    "for (...) { total += n; }",
  );
  let above_inner = app_learn_js_lesson_for_same_as_while_above(
    app_code_lesson_while_total,
  );
  let lesson = app_code_lesson_total_up_generic(
    js_code_for_start_condition_update_lines,
    above_inner,
    name_id,
  );
  return lesson;
}
