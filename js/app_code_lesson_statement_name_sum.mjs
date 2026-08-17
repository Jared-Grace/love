import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_sum_title_name_id } from "./app_code_lesson_statement_name_sum_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_sum_batch } from "./app_code_lesson_statement_name_sum_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_sum_above } from "./app_code_lesson_statement_name_sum_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_sum() {
  arguments_assert(arguments, 0);
  ("two names added together: let a = 2; let b = 3; console.log(a + b); writes out 5");
  ("The screen before this one read a name on the right of an equals and said what that means: a name may be written wherever a value may be written, and what gets used is whatever the name is holding. Here that same sentence is met in the one place it has not been seen yet - inside an expression, where a number has stood in every arithmetic lesson the learner has done.");
  ("So the new fact is not a new rule. It is the rule from the screen before reaching a position, and the whole screen exists because a learner who has only ever seen a name handed straight to console.log has no reason yet to believe the name will be read when something else is being done with it.");
  ("Both places hold names rather than one name and one number. The two sides of a sum are the same kind of place, so a learner shown a name in only one of them has been left the question of whether the other one is different - and answering it costs a whole screen that this one can answer for free.");
  ("Numbers rather than the words the screens before use. A plus between two pieces of text does something a learner has never been told about, and it would be the second new thing on a screen that has one; a plus between two numbers is the sum they have solved since the operators lessons.");
  let name_id = app_code_lesson_statement_name_sum_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_sum_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_sum_above,
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
