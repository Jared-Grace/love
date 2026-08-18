import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_copy_kept_title_name_id } from "./app_code_lesson_statement_name_copy_kept_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_copy_kept_batch } from "./app_code_lesson_statement_name_copy_kept_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_copy_kept_above } from "./app_code_lesson_statement_name_copy_kept_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_copy_kept() {
  arguments_assert(arguments, 0);
  ('a name keeps what it was given after the name it was filled from changes: let a = "grapes"; let c = a; a = "olives"; console.log(c); writes out grapes');
  ("The screen that taught copying said in the picture that nothing was removed from the cup that was copied. This one asks the question from the other end - the copied cup changes afterwards - and the answer is the same fact seen from the side a learner will actually meet it on.");
  ("So the new fact is that the copying happened once, when that line was reached, and is over. A name is not tied to the name it was filled from; it holds a value, and the value it holds is the one that was there at the moment it was filled.");
  ("This is the misreading that survives longest if it is never asked about. Nothing before this screen can tell a learner whether a name follows another name or holds a copy of it - every program up to here would write out the same thing either way - so a learner who has quietly decided it follows has been right every time so far.");
  ("Two names and four lines, which is the copying screen's program with one line put in. The line put in is the changing line from three screens back, so the program is made only of lines a learner has read, and everything new is in the order they come in.");
  ("Building the code from tokens stays switched off, for the reason the screens before give.");
  let name_id = app_code_lesson_statement_name_copy_kept_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_copy_kept_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_copy_kept_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
