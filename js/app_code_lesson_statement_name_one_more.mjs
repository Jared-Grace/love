import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_more_title_name_id } from "./app_code_lesson_statement_name_one_more_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_one_more_batch } from "./app_code_lesson_statement_name_one_more_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_one_more_above } from "./app_code_lesson_statement_name_one_more_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_one_more() {
  arguments_assert(arguments, 0);
  ("a name given one more than it holds: let a = 7; a = a + 1; console.log(a); writes out 8");
  ("The screen before this one put the same name on both sides of the equals with a second name beside it. Here that second name is a written 1, and nothing else has moved.");
  ("So the new fact is that the two things added need not both be names - one of them may be a number written into the line. A learner has added two written numbers and has added two names, and this is the pair in between.");
  ("The screen exists for the line and not for the fact. Adding one to a name is how every count in every program is kept, and a learner meeting it for the first time inside a loop would be working out the loop and this line at once.");
  ("One name rather than two, because the number is written into the line and a second name would sit on the screen with nothing reading it.");
  let name_id = app_code_lesson_statement_name_one_more_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_one_more_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_one_more_above,
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
