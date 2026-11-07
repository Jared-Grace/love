import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_title_name_id } from "./app_code_lesson_statement_name_value_title_name_id.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { app_learn_js_lesson_statement_name_value_batch } from "./app_learn_js_lesson_statement_name_value_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_lesson_statement_name_value_name } from "./app_learn_js_lesson_statement_name_value_name.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { app_learn_js_lesson_decoy_code_pieces } from "./app_learn_js_lesson_decoy_code_pieces.mjs";
import { app_learn_js_lesson_statement_name_value_above } from "./app_learn_js_lesson_statement_name_value_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_value() {
  arguments_assert(arguments, 0);
  ('giving a value a name, and reading it back: let a = "grape"; on one line and console.log(a); on the next writes out grape');
  ("The one new fact, and the first lesson in the course with a line that runs and writes nothing out. Every line that ran up to here came to a value. Here the first line does not write anything out at all - it puts a value away under a name - and the second line hands that name to console.log and gets the value back.");
  ("Only ever one name, and always the same one letter. A learner who has just met the idea that a name holds something should not be asked in the same breath what the name is allowed to be spelled with, nor which of two names was asked for; those are the two lessons after this one, in that order.");
  ("The wrong answers use this program's own word and name, and nothing else. Borrowed from the other questions they carried a different word each, so the only word in the code was the answer and every question could be got right without looking at the name. This lesson used to accept that, so that the one fact could meet a learner on its own; the human asked for it to be closed 2026-11-03, and these wrong answers ask only the one fact, so it still meets them alone.");
  ("Reading forwards they are the name written out rather than what it holds, the word with its quote marks, and the word twice as though the first line wrote out too. Reading backwards they are the first line alone, which writes nothing out, the name in quote marks, which writes out the name, and the name written out twice.");
  ("Not picked: a line that reads a name never given a value, because a program that stops with an error is not a thing the course has met yet. Not picked: a second name, because which of two names was asked for is a later lesson.");
  ("The value is a word rather than a number, because an earlier lesson has already given console.log a word, so the name is the only thing here that is new.");
  ("Nothing is said here about which line happens first. Both lines have to happen, and in this order, but a learner who has not thought about that still gets every question right - the order is used and not yet named. It is named later, when a value is given a name twice and only the second one survives.");
  ("Building the code from tokens is left switched off. The order the words of two lines go in is a second thing to learn, and this lesson is about the name.");
  let name_id = app_code_lesson_statement_name_value_title_name_id();
  let batch = app_learn_js_batch_question_answer_fns(
    app_learn_js_lesson_statement_name_value_batch,
    eval_console_log_to_list,
  );
  function backwards_decoys(question, answer) {
    "the first line alone, the name in quote marks, and the name written out twice";
    let word = eval_console_log_lines(answer);
    let name = app_learn_js_lesson_statement_name_value_name();
    let quoted = app_code_string_code(word);
    let held = js_code_let_statement(name, quoted);
    let logged = js_code_console_log_statement(name);
    let logged_name = app_code_word_console_log_statement(name);
    let name_written = list_join_newline([held, logged_name]);
    let written_twice = list_join_newline([held, logged, logged]);
    let found = [held, name_written, written_twice];
    return found;
  }
  let lesson = app_learn_js_lesson_code_logged({
    decoys: app_learn_js_lesson_decoy_code_pieces,
    backwards_decoys,
    above: app_learn_js_lesson_statement_name_value_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    steps: true,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
