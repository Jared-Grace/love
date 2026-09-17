import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_comment_after_code_title_name_id } from "./app_code_lesson_comment_after_code_title_name_id.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_comment_after_code_batch } from "./app_code_lesson_comment_after_code_batch.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_lesson_comment_after_code_above } from "./app_code_lesson_comment_after_code_above.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
import { app_code_lesson_decoy_comment_ignored } from "./app_code_lesson_decoy_comment_ignored.mjs";
import { app_code_lesson_decoy_comment_after_code_swapped } from "./app_code_lesson_decoy_comment_after_code_swapped.mjs";
export function app_code_lesson_comment_after_code() {
  arguments_assert(arguments, 0);
  ("a comment after code on the same line: console.log(6 + 5); // console.log(3 + 9); writes out 11 and nothing else");
  ("The one new fact is that the slashes need not start the line. The code in front of them runs, and everything from them to the end of the line is skipped - which is what the words the course gives for a comment always said, and what a learner could not see while the slashes stood at the start of every line.");
  ("It comes straight after the lesson that puts the slashes in front of a line, because it is that lesson with the line break taken out. A learner who has just watched a noted line go unrun reads the same two halves on one line and is asked only which half runs.");
  ("The program is not unscrambled, for the reason the lesson before gives: the machine does not read a comment, so the tokens a program is taken apart into leave the skipped half out, and a learner would be asked to build a line that has lost the half it is about.");
  ("Both quizzes are given tailored wrong answers. Given the code, the ways to be wrong are to read the comment as code and so answer with both numbers, and to read the wrong half and answer with the one that never ran; given what came out, the ways to be wrong are the line with its halves swapped and the line with its slashes taken out. Without them either direction could be settled by finding a number.");
  let name_id = app_code_lesson_comment_after_code_title_name_id();
  let batch = app_code_batch_question_answer_fns(
    app_code_lesson_comment_after_code_batch,
    eval_console_log_lines,
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_lesson_comment_after_code_above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: app_code_code_dark_lines_comments,
    unscramble: false,
    decoys: app_code_lesson_decoy_comment_ignored,
    backwards_decoys: app_code_lesson_decoy_comment_after_code_swapped,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
