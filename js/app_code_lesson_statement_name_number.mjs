import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_number_title_name_id } from "./app_code_lesson_statement_name_number_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_number_batch } from "./app_code_lesson_statement_name_number_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_number_above } from "./app_code_lesson_statement_name_number_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_number() {
  arguments_assert(arguments, 0);
  ("a name holding a number: let a = 1; console.log(a); writes out 1");
  ("The smallest step from the lesson that first gave a value a name: the same two lines, with a number where the word was. It comes before any lesson that works a number out under a name, because there the value comes out of working something out, and here it is written in plainly.");
  let name_id = app_code_lesson_statement_name_number_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_number_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_number_above,
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
