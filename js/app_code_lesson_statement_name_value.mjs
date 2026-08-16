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
  ("giving a value a name, and reading it back: let a = 3; on one line and console.log(a); on the next writes out 3");
  ("The one new fact, and the first lesson in the course whose code stands on more than one line. Everything up to here has been one line that comes to a value. Here the first line does not write anything out at all - it puts a value away under a name - and the second line hands that name to console.log and gets the value back.");
  ("The harder examples give two values names and write out only one of them. That is where the lesson can be got wrong: the name that was not asked for is sitting right there on the screen, and its value is offered as one of the answers, because it is the answer of another question in the same set.");
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
