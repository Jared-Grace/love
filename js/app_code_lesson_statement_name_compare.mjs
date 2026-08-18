import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_compare_title_name_id } from "./app_code_lesson_statement_name_compare_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_compare_batch } from "./app_code_lesson_statement_name_compare_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_compare_above } from "./app_code_lesson_statement_name_compare_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_compare() {
  arguments_assert(arguments, 0);
  ("two names compared: let a = 3; let b = 5; console.log(a < b); writes out true");
  ("The sixth Statements lesson put two names in the two places a sum takes its numbers from. This one leaves the names exactly where they were and changes the symbol between them, so the only thing a learner is asked to accept is that the rule they were given there was about the places rather than about the plus.");
  ("A comparison rather than any of the other things that fit between two names, because it is the one a learner has already spent a whole category of lessons on. What comes out of it - true or false - was settled in the Operators lessons, so nothing about the answer is new here either.");
  ("Only two answers exist, so a question that shows the program and asks for the value offers two buttons rather than four. Four would mean two of them repeating the other two, and a learner counting buttons would learn that comparisons have two answers from the shape of the screen rather than from the lesson.");
  let name_id = app_code_lesson_statement_name_compare_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_compare_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_compare_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
  });
  return lesson;
}
