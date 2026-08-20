import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_again_above } from "./app_code_lesson_statement_name_again_above.mjs";
import { app_code_lesson_statement_name_again_batch } from "./app_code_lesson_statement_name_again_batch.mjs";
import { app_code_lesson_statement_name_again_title_name_id } from "./app_code_lesson_statement_name_again_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_again() {
  arguments_assert(arguments, 0);
  ('one name given a value and then given another one: let a = "grapes"; a = "olives"; console.log(a); writes out olives');
  ("The first screen where the order of the lines has to be noticed rather than merely followed. Every question before this one could be answered by finding the line that made the name and reading what it was handed; here that line is on the screen, it is the first thing a learner reaches for, and it is wrong.");
  ("So the word it was handed is a wrong answer on the buttons, put there by the batch on purpose. A learner who reads only the let line does not fail to find an answer - they find one, and it is marked wrong, which is what teaches them that a later line reached the name first.");
  ("The new line shape is the only new thing. One name still, the same one letter, values still words: what changed is that a name can be given a value without let, and only because it already has one.");
  ("Building the code from tokens stays switched off, for the reason the lessons before give.");
  let name_id = app_code_lesson_statement_name_again_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_again_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_again_above,
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
