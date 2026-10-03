import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
export function app_code_lesson_current_complete_is(context) {
  arguments_assert(arguments, 1);
  ("whether the lesson the learner is on has every one of its quizzes answered right, read fresh from their disk");
  let progress = app_code_progress_read(context);
  let lesson_id = app_code_lesson_current_id(context);
  let complete = app_code_lesson_complete_is(progress, lesson_id);
  return complete;
}
