import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_value_above } from "./app_code_lesson_statement_name_value_above.mjs";
import { app_code_lesson_statement_name_value_batch } from "./app_code_lesson_statement_name_value_batch.mjs";
import { app_code_lesson_statement_name_value_title_name_id } from "./app_code_lesson_statement_name_value_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_value() {
  arguments_assert(arguments, 0);
  ('giving a value a name, and reading it back: let a = "grape"; on one line and console.log(a); on the next writes out grape');
  ("The one new fact, and the first lesson in the course whose code stands on more than one line. Everything up to here has been one line that comes to a value. Here the first line does not write anything out at all - it puts a value away under a name - and the second line hands that name to console.log and gets the value back.");
  ("Only ever one name. Two names, of which only one is written out, is the next lesson: a learner who has just met the idea that a name holds something should not be asked in the same breath to pick which of two names was asked for.");
  ("That does make this lesson easy to pass without it: the only value on the screen is the answer. The lesson that follows is where it has to be understood, and it is worth a screen that can be got right by luck to have this one fact meet a learner on its own.");
  ("The value is a word rather than a number, because the lesson before this one has just given console.log a word, so the name is the only thing here that is new.");
  ("Nothing is said here about which line happens first. Both lines have to happen, and in this order, but a learner who has not thought about that still gets every question right - the order is used and not yet named. It is named later, when a value is given a name twice and only the second one survives.");
  ("Building the code from tokens is left switched off. The order the words of two lines go in is a second thing to learn, and this lesson is about the name.");
  let name_id = app_code_lesson_statement_name_value_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_value_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_value_above,
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
