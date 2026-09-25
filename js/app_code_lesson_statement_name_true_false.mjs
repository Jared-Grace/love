import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_true_false_title_name_id } from "./app_code_lesson_statement_name_true_false_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_true_false_batch } from "./app_code_lesson_statement_name_true_false_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_true_false_above } from "./app_code_lesson_statement_name_true_false_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_statement_name_true_false() {
  arguments_assert(arguments, 0);
  ("a name holding true or false: let a = true; console.log(a); writes out true");
  ("The smallest step from the lesson that first gave a value a name: the same two lines, with true or false where the word was. It comes before any lesson that keeps a comparison under a name, because there the value comes out of working something out, and here it is written in plainly.");
  ("Only two programs exist, so every question offers two buttons rather than four, whichever way it asks.");
  ("The examples screen shows both programs and so is complete: it offers no button for another example, because pressing it could only show the same two again.");
  ("Building the code from tokens is left switched off, as it is on the lesson this one follows from.");
  let name_id = app_code_lesson_statement_name_true_false_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_true_false_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_true_false_above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    quiz_backwards_answer_count_override: 2,
    forwards_answer_count_override: 2,
  });
  property_set(lesson, "examples_complete", true);
  return lesson;
}
