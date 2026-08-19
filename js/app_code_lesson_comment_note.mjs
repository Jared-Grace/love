import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_comment_note_above } from "./app_code_lesson_comment_note_above.mjs";
import { app_code_lesson_comment_note_batch } from "./app_code_lesson_comment_note_batch.mjs";
import { app_code_lesson_comment_note_title_name_id } from "./app_code_lesson_comment_note_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
export function app_code_lesson_comment_note() {
  arguments_assert(arguments, 0);
  ("a note written in the code: // add the two numbers above console.log(3 + 4); still writes out 7");
  ("The one new fact is that a line may be there for a person and not for the machine. Every line a learner has read until now was read by both, so this is the first time the two readers of a program come apart.");
  ("It is taught on the plainest line there is rather than on anything the recent screens have been building, because a note may sit above any line at all and the line it sits above is not what is being learnt.");
  ("Notes are not unscrambled. The tokens a program is taken apart into come from the machine's reading of it, and the machine does not read a note - so a note handed to that quiz arrives as nothing at all, and a learner would be asked to build a line that has gone.");
  ("The code is painted with the note dimmed, in the questions as well as in the worked example. A screen that dimmed the note in one place and not the other would be saying the note is different only sometimes.");
  let name_id = app_code_lesson_comment_note_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_comment_note_batch,
    eval_console_log_to_list,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_comment_note_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: app_code_code_dark_lines_comments,
    unscramble: false,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
