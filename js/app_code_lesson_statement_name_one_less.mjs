import { app_code_batch_name_watched } from "./app_code_batch_name_watched.mjs";
import { app_code_lesson_statement_name_watch_decoys } from "./app_code_lesson_statement_name_watch_decoys.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_less_title_name_id } from "./app_code_lesson_statement_name_one_less_title_name_id.mjs";
import { app_code_lesson_statement_name_one_less_batch } from "./app_code_lesson_statement_name_one_less_batch.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_one_less_above } from "./app_code_lesson_statement_name_one_less_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_one_less() {
  arguments_assert(arguments, 0);
  ("Its programs write the name out after every change, and the lesson straight after asks the same programs with only the last writing-out. Seen first, each value is on the screen; only then is a learner asked to carry the changes in their head (the human's order, 2026-09-27).");
  ("a name given one less than it holds: let a = 7; a = a - 1; console.log(a); writes out 6");
  ("The twin of the lesson on one more, met right after it: the same three lines with a minus where the plus was, so the only new thing is which way the name moves.");
  let name_id = app_code_lesson_statement_name_one_less_title_name_id();
  let batch = app_code_batch_name_watched(
    app_code_lesson_statement_name_one_less_batch,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_one_less_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys: app_code_lesson_statement_name_watch_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
