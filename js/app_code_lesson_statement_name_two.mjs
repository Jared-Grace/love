import { app_code_lesson_decoy_code_words } from "./app_code_lesson_decoy_code_words.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_two_above } from "./app_code_lesson_statement_name_two_above.mjs";
import { app_code_lesson_statement_name_two_batch } from "./app_code_lesson_statement_name_two_batch.mjs";
import { app_code_lesson_statement_name_two_title_name_id } from "./app_code_lesson_statement_name_two_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_two() {
  arguments_assert(arguments, 0);
  ('two values given two names, and only one of them written out: let a = "grapes"; let b = "olives"; console.log(b); writes out olives');
  ("The first screen in the course that cannot be answered without reading a name. Every question puts two words in front of a learner and offers both of them, so the word that is not the answer is not a wrong answer somebody invented - it is on the screen, it was put there on purpose, and reaching for it is the mistake the whole lesson is about.");
  ("That is what the two lessons before this could not ask for. Where one cup holds the only word on the screen, a learner who has understood nothing still answers every question right. Here understanding nothing is the difference between two buttons.");
  ("Nothing else moves. The values are still words, the names are still the two letters, and the lines are still read in the order they are written. Only the count of names has gone from one to two.");
  ("What is still not asked is what happens when one name is given a value twice. That needs the order of the lines to be noticed rather than used, and it is the lesson after this one.");
  ("Building the code from tokens is left switched off, for the reason the lessons before give: the order the lines go in is a second thing to learn, and there are three of them now.");
  let name_id = app_code_lesson_statement_name_two_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_two_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_two_above,
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
