import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_repeat_word_up_generic } from "./app_code_lesson_repeat_word_up_generic.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { app_code_lesson_for_same_as_while_above } from "./app_code_lesson_for_same_as_while_above.mjs";
import { app_code_lesson_while_repeat_word } from "./app_code_lesson_while_repeat_word.mjs";
export function app_learn_js_lesson_for_repeat_word() {
  arguments_assert(arguments, 0);
  ('a for that writes out the same word each run: for (let n = 0; n < 3; n++) { console.log("joy"); } writes out joy three times, the same as The same word each run');
  ("The one new fact is that a for can write out something other than n, with n only counting the runs, the way a while already did. It comes straight after For taking away one, in the order agreed with the human 2026-11-04.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For the same word each run",
    '{ console.log("joy"); }',
  );
  let above_inner = app_code_lesson_for_same_as_while_above(
    app_code_lesson_while_repeat_word,
  );
  let lesson = app_code_lesson_repeat_word_up_generic(
    js_code_for_start_condition_update_lines,
    above_inner,
    name_id,
  );
  return lesson;
}
