import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_log_twice_above } from "./app_code_lesson_log_twice_above.mjs";
import { app_code_lesson_log_twice_batch } from "./app_code_lesson_log_twice_batch.mjs";
import { app_code_lesson_log_twice_title_name_id } from "./app_code_lesson_log_twice_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";

export function app_code_lesson_log_twice() {
  arguments_assert(arguments, 0);
  (
    "two lines that write out: console.log(4 + 6); console.log(5 + 7); writes out 10 and then 12, one under the other"
  );
  (
    "The one new fact is that a program may write out more than once. Every program a learner has read until now had a single line that wrote something, so an answer has always been one thing; here an answer is a list of things in the order they happened."
  );
  (
    "It is taught on the plainest line there is, twice, rather than on anything the recent screens have been building. What is new is the second line existing at all, and a second line doing something the learner has not met would hide that behind the newer thing."
  );
  (
    "The answer is the text a person would see, one line for each writing-out, rather than the list of what each one was given. A list drawn on a screen arrives as its commas, and a learner would be shown a comma the machine never wrote."
  );
  (
    "The program is not unscrambled. The tokens a program is taken apart into carry no line breaks, so a two-line program handed to that quiz would be built back as one line - and one line against two is the single thing this screen exists to tell apart."
  );
  let name_id = app_code_lesson_log_twice_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_log_twice_batch,
    eval_console_log_lines,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_log_twice_above,
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
