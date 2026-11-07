import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_for_same_as_while_above } from "./app_learn_js_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_count } from "./app_code_lesson_while_count.mjs";
import { app_learn_js_lesson_count_generic } from "./app_learn_js_lesson_count_generic.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_learn_js_lesson_for_count() {
  arguments_assert(arguments, 0);
  ("a for counting its own runs: let count = 0; for (let n = 16; n > 3; n /= 2) { count += 1; } console.log(count); writes out 3, the same as Counting the runs");
  ("The one new fact is that the lines inside a for can count the runs while its last part changes n some other way.");
  ("Chosen by the human 2026-11-05, as one of four for lessons after For with a running total.");
  ("The while shown above has count += 1 first and n /= 2 last, the other way round from Counting the runs, picked 2026-11-05: then the for is that while with its last line moved up, which is what every earlier for lesson showed. Neither line reads what the other changes, so both orders write out the same. The rejected reading was showing the while as that lesson wrote it, which would ask the learner to see two lines swap as well as one line move.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For counting the runs",
    "for (...) { count += 1; }",
  );
  let above_inner = app_learn_js_lesson_for_same_as_while_above(
    app_code_lesson_while_count,
  );
  let lesson = app_learn_js_lesson_count_generic(
    js_code_for_start_condition_update_lines,
    true,
    above_inner,
    name_id,
  );
  return lesson;
}
