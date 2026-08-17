import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_itself_sum_title_name_id } from "./app_code_lesson_statement_name_itself_sum_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_itself_sum_batch } from "./app_code_lesson_statement_name_itself_sum_batch.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_itself_sum_above } from "./app_code_lesson_statement_name_itself_sum_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_itself_sum() {
  arguments_assert(arguments, 0);
  ("a name given what it and another name add up to: let a = 2; let b = 3; a = a + b; console.log(a); writes out 5");
  ("The screen before this one gave the sum to a third name, and said in as many words why it was a third one: a line that reads a cup and fills the same cup asks a learner to work out two things at once. This screen is that second thing, on its own, now that the first has been answered.");
  ("So the new fact is that a name may stand on both sides of the equals, and that the side being read is read before the side being filled is filled. Nothing else on the screen is new - the sum is the screen before last's and the equals without a let is the fourth screen's.");
  ("It is the line a learner will write more than any other once counting starts, which is why it is worth a screen of its own rather than being met for the first time inside something larger.");
  ("Numbers rather than words, for the same reason as the two screens before: a plus between two pieces of text does something a learner has never been told about.");
  let name_id = app_code_lesson_statement_name_itself_sum_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_itself_sum_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_itself_sum_above,
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
