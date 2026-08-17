import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_total_title_name_id } from "./app_code_lesson_statement_name_total_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_total_batch } from "./app_code_lesson_statement_name_total_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_total_above } from "./app_code_lesson_statement_name_total_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_total() {
  arguments_assert(arguments, 0);
  ("a sum given a name: let a = 2; let b = 3; let c = a + b; console.log(c); writes out 5");
  ("The screen before this one put a sum of two names inside console.log. Here the same sum stands on the right of an equals instead, which is the one place a value goes that the learner has not yet seen a sum standing in.");
  ("So the new fact is not a new rule. It is the rule that a name may be given a value, meeting a value that has to be worked out first - and the whole screen exists because a learner who has only ever been given a value already written out has no reason yet to believe the sum will be done before the name is filled.");
  ("A third name rather than one of the two. Given back to the first name, the line would be reading a cup and filling the same cup, and a learner would have two things to work out at once when this screen is asking about one.");
  ("Numbers rather than the words the earlier screens use, for the same reason as the screen before: a plus between two pieces of text does something a learner has never been told about, and it would be the second new thing on a screen that has one.");
  let name_id = app_code_lesson_statement_name_total_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_total_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_total_above,
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
