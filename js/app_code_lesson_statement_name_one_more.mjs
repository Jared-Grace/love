import { app_code_batch_name_watched } from "./app_code_batch_name_watched.mjs";
import { app_code_lesson_statement_name_watch_decoys } from "./app_code_lesson_statement_name_watch_decoys.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_more_title_name_id } from "./app_code_lesson_statement_name_one_more_title_name_id.mjs";
import { app_code_lesson_statement_name_one_more_batch } from "./app_code_lesson_statement_name_one_more_batch.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_one_more_above } from "./app_code_lesson_statement_name_one_more_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_one_more() {
  arguments_assert(arguments, 0);
  ("Its programs write the name out after every change, and the lesson straight after asks the same programs with only the last writing-out. Seen first, each value is on the screen; only then is a learner asked to carry the changes in their head (the human's order, 2026-09-27).");
  ("a name given one more than it holds: let a = 7; console.log(a); a = a + 1; console.log(a); writes out 7 and then 8");
  ("It sits right after the plus one lessons: there a new name was given one more than a name, and here the name on the left is that same name, and nothing else has moved. It used to sit after the lesson that puts a name on both sides of a sum of two names.");
  ("So the new fact is that the name being filled may be the name being read: the right side is worked out first, from what the name holds, and only then is the name filled.");
  ("The screen exists for the line and not for the fact. Adding one to a name is how every count in every program is kept, and a learner meeting it for the first time inside a loop would be working out the loop and this line at once.");
  ("One name rather than two, because the number is written into the line and a second name would sit on the screen with nothing reading it.");
  let name_id = app_code_lesson_statement_name_one_more_title_name_id();
  let batch = app_code_batch_name_watched(
    app_code_lesson_statement_name_one_more_batch,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_one_more_above,
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
