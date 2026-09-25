import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_less_title_name_id } from "./app_code_lesson_statement_name_one_less_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_one_less_batch } from "./app_code_lesson_statement_name_one_less_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_one_less_above } from "./app_code_lesson_statement_name_one_less_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_one_less() {
  arguments_assert(arguments, 0);
  ("a name given one less than it holds: let a = 7; a = a - 1; console.log(a); writes out 6");
  ("The twin of the lesson on one more, met right after it: the same three lines with a minus where the plus was, so the only new thing is which way the name moves.");
  let name_id = app_code_lesson_statement_name_one_less_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_one_less_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_one_less_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
