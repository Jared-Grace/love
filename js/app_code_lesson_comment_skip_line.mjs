import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_comment_skip_line_above } from "./app_code_lesson_comment_skip_line_above.mjs";
import { app_code_lesson_comment_skip_line_batch } from "./app_code_lesson_comment_skip_line_batch.mjs";
import { app_code_lesson_comment_skip_line_title_name_id } from "./app_code_lesson_comment_skip_line_title_name_id.mjs";
import { app_code_lesson_decoy_comment_ignored } from "./app_code_lesson_decoy_comment_ignored.mjs";
import { app_code_lesson_decoy_comment_moved } from "./app_code_lesson_decoy_comment_moved.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
export function app_code_lesson_comment_skip_line() {
  arguments_assert(arguments, 0);
  ("two lines that write out with the two slashes in front of one of them: // console.log(4 + 6); console.log(3 + 8); writes out 11 and nothing else");
  ("The one new fact is that a line can be in a program and not run. A learner has met the slashes as the way to write words for a person to read, and has met a program whose lines each did something; here the slashes are put in front of a line that would have done something, and it does not.");
  ("It could not be shown before now. A note in front of the only line a program has leaves an empty screen, which says nothing about what was skipped; it takes a second line still running to make the missing answer visible as missing.");
  ("The answer is the text a person would see, so a program whose two lines have become one writes one line - and the whole of what happened is read off how much came out.");
  ("The program is not unscrambled. The tokens a program is taken apart into come from the machine's reading of it, and the machine does not read a note - so the skipped line arrives as nothing at all, and a learner would be asked to build a program that has lost the line it is about.");
  ("Both quizzes are given tailored wrong answers, and they are different in the two directions because the two directions ask different things. Given the code, the ways to be wrong are to read the note as code and to read the wrong line; given what came out, the way to be wrong is to pick the program with its note on the other line. Without them either direction could be settled by finding a number, and the screen would accept an answer from a learner who never saw the slashes.");
  let name_id = app_code_lesson_comment_skip_line_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_comment_skip_line_batch,
    eval_console_log_lines,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_comment_skip_line_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: app_code_code_dark_lines_comments,
    unscramble: false,
    decoys: app_code_lesson_decoy_comment_ignored,
    backwards_decoys: app_code_lesson_decoy_comment_moved,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
