import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_watch_title_name_id } from "./app_code_lesson_statement_name_watch_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_watch_batch } from "./app_code_lesson_statement_name_watch_batch.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_statement_name_watch_above } from "./app_code_lesson_statement_name_watch_above.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_statement_name_watch_decoys } from "./app_code_lesson_statement_name_watch_decoys.mjs";
export function app_code_lesson_statement_name_watch() {
  arguments_assert(arguments, 0);
  ('a name written out before and after it changes: let a = "grapes"; console.log(a); a = "olives"; console.log(a); writes out grapes and then olives');
  ("It sits right after the lesson that first gives a name another value, because that is the first change there is to watch, and after the lesson on writing out twice, because both of its writing-outs are that.");
  ("As early as it can be, at the human's asking on 2026-09-26. Every lesson after this one - copying a name and changing it, adding one to a name - asks a learner to follow a name through a change, and writing the name out at each step is how they can see it rather than hold it in their head. Before the lesson on giving a name another value, a name holds one thing for the whole program, so a second writing-out would only repeat the first.");
  ("The new fact is that the same line, written twice, can write two different things: a name is read when its line runs, so it gives what it holds at that moment.");
  ("The program is not unscrambled, for the reason the lesson on writing out twice gives: the tokens carry no line breaks. It does take the two quizzes about lines, because here the order of the lines decides both answers.");
  ("Reading forwards, the wrong answers are tailored: the name read as holding one word throughout, either one, and the answer the other way round. Reading backwards the other programs are the wrong answers, as in the lesson before.");
  let name_id = app_code_lesson_statement_name_watch_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_statement_name_watch_batch,
    eval_console_log_lines,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_statement_name_watch_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys: app_code_lesson_statement_name_watch_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
