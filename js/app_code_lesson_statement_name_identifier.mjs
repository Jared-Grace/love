import { app_code_lesson_decoy_code_names } from "./app_code_lesson_decoy_code_names.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_identifier_above } from "./app_code_lesson_statement_name_identifier_above.mjs";
import { app_code_lesson_statement_name_identifier_batch } from "./app_code_lesson_statement_name_identifier_batch.mjs";
import { app_code_lesson_statement_name_identifier_title_name_id } from "./app_code_lesson_statement_name_identifier_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_identifier() {
  arguments_assert(arguments, 0);
  ('the name a value is given can be any identifier, not only the one letter used so far: let joy = "peace"; on one line and console.log(joy); on the next writes out peace');
  ("The one new fact, and it is a small one - the lesson before this said identifiers are used as names, and the five identifier lessons before that said what an identifier is. Nothing here is new except that the two are finally put together on the same screen.");
  ("Small as it is, it is the first screen in the course whose questions cannot be got right without reading the name. Where every cup is called the same one letter the only word on the screen is the answer, so a learner who has understood nothing still answers every question. Here the name is a word too, and the name of each program is offered as one of the wrong answers, so answering means telling the two apart.");
  ("It comes before two names rather than after, because it changes one thing about a screen already understood and two names adds a second line and a choice between them. A learner meeting a word for a name for the first time should not also be deciding which of two words was asked for.");
  ("The value is still a word and the code is still the same two lines. Only what the name is spelled with has moved.");
  ("Building the code from tokens is left switched off, for the reason the lesson before gives: the order two lines go in is a second thing to learn.");
  let name_id = app_code_lesson_statement_name_identifier_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_identifier_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_identifier_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys: app_code_lesson_decoy_code_names,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
