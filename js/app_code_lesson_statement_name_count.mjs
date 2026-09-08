import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_count_title_name_id } from "./app_code_lesson_statement_name_count_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_count_batch } from "./app_code_lesson_statement_name_count_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_count_above } from "./app_code_lesson_statement_name_count_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_count() {
  arguments_assert(arguments, 0);
  ("a name given one more than it holds twice over: let a = 7; a = a + 1; a = a + 1; console.log(a); writes out 9");
  ("The screen before this one taught the line. This one says the line twice and nothing else, so the one thing a learner has to work out is what the second copy does.");
  ("It is quizzed and not merely shown, which is the change this screen was split out to make. The line said twice used to sit at the foot of the screen that taught the line, where it was something to read on the way past; a learner who read it as doing nothing was never asked a question that would tell them so. Asked, they answer one number too low and find out.");
  ("Counting is what the whole of programming does with this line, and it is worth a screen of its own for that reason rather than because the line is hard. A learner meeting it first inside a loop would be working out the loop and this line at once.");
  let name_id = app_code_lesson_statement_name_count_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_count_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_count_above,
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
