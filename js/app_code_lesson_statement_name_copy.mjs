import { app_code_lesson_decoy_code_words } from "./app_code_lesson_decoy_code_words.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_copy_above } from "./app_code_lesson_statement_name_copy_above.mjs";
import { app_code_lesson_statement_name_copy_batch } from "./app_code_lesson_statement_name_copy_batch.mjs";
import { app_code_lesson_statement_name_copy_title_name_id } from "./app_code_lesson_statement_name_copy_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_copy() {
  arguments_assert(arguments, 0);
  ('a name given what another name holds: let a = "grapes"; let b = "olives"; let c = a; console.log(c); writes out grapes');
  ("The first screen where a name is read rather than written out. Every line up to here has put a value under a name and then handed that name to console.log; here a name is handed to the thing that makes a name, which is the same reading in a place a learner has never seen it.");
  ("So the new fact is one fact and it is about a place, not about a line: a name may be written wherever a value may be written, and what gets used is whatever the name is holding. The line that does it is a line a learner already knows by shape - only what is on the right of the equals has changed.");
  ("The quote marks are the whole hazard, and the screen ends on them. A learner who has only ever seen a value in quote marks reads a bare name as a word with the quote marks left off by mistake, and would answer every question with a letter.");
  ("The third name is a new one rather than one of the two, so nothing on the screen is given a value twice. That was the lesson before and it is settled; here the only thing that changes between the two pictures is that a cup was added.");
  ("Both words are on the screen of every question and only one of them was copied, so the word that was not copied is a wrong answer waiting to be reached for. That is what makes the third line worth reading rather than skipping.");
  ("Building the code from tokens stays switched off, for the reason the lessons before give; there are four lines now.");
  let name_id = app_code_lesson_statement_name_copy_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_copy_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_copy_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys: app_code_lesson_decoy_code_words,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
