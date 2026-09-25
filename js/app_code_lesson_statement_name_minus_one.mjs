import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_minus_one_title_name_id } from "./app_code_lesson_statement_name_minus_one_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_minus_one_batch } from "./app_code_lesson_statement_name_minus_one_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_minus_one_above } from "./app_code_lesson_statement_name_minus_one_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_minus_one() {
  arguments_assert(arguments, 0);
  ("one less than a name, kept under a new name: let a = 8; let b = a - 1; console.log(b); writes out 7");
  ("The lesson on keeping a total made a new name from two names. This one makes a new name from one name and a written number, with a minus between them, so it sits between that lesson and the one that writes the answer back into the same name.");
  ("A new name was chosen over writing back into the same name at the human's suggestion, because a learner reading a new name never has to see a name lose what it held.");
  let name_id = app_code_lesson_statement_name_minus_one_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_minus_one_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_minus_one_above,
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
