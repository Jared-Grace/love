import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_name_one_step_generic(
  name_id,
  batch_fn,
  above,
  steps,
) {
  arguments_assert(arguments, 4);
  ("a one-step lesson: one more or one less than a name, kept under a new name");
  ("Shared by the plus and minus twins, which differ only in their title, their programs and the boxes above.");
  let batch = app_learn_js_batch_question_answer_fns(
    batch_fn,
    eval_console_log_to_list,
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
