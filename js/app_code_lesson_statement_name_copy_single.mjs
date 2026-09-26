import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_copy_single_title_name_id } from "./app_code_lesson_statement_name_copy_single_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_copy_single_batch } from "./app_code_lesson_statement_name_copy_single_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_copy_single_above } from "./app_code_lesson_statement_name_copy_single_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_copy_single() {
  arguments_assert(arguments, 0);
  ('a name given what another name holds: let a = "love"; let b = a; console.log(b); writes out love');
  ("It sits right after the two-names lesson, whose program it changes in one place: the second name is given the first name instead of a word. The copying lesson after it puts two words on the screen and asks which one was copied; this one has only the one word, so the only new thing is a name with no quote marks on the right of the equals.");
  ("It was added because the lesson on one more than a name reminded learners of a three-line copy program that no lesson taught - the copying lesson starts at four lines.");
  let name_id = app_code_lesson_statement_name_copy_single_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_copy_single_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_copy_single_above,
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
