import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_code_lesson_current_last_is } from "./app_code_lesson_current_last_is.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_lesson_next_none_is(context) {
  "Whether there is nowhere at all to go on to from the lesson the learner is reading: no review after it, no lesson after it, and no unfinished lesson anywhere else in the course.";
  "TWO SCREENS ASK IT - the skip button at the foot of a lesson, and the end of the last quiz in one - and they must agree, because one of them draws the way forward and the other draws the note saying there is none. Answered twice, the two could drift into showing a dead button beside that note, or the note beside a course the learner has not finished.";
  "AN UNFINISHED LESSON ANYWHERE COUNTS AS SOMEWHERE TO GO, not only one further down. A learner who skipped ahead sits on the last lesson with blue rows still above it, and being told there is no more to do is untrue - the way on carries round the top of the list, so the answer here has to as well.";
  arguments_assert(arguments, 1);
  let number = app_code_lesson_current_number(context);
  let has_review = app_code_review_due_is(number);
  if (has_review) {
    return false;
  }
  let last = app_code_lesson_current_last_is(context);
  let more_below = not(last);
  if (more_below) {
    return false;
  }
  let id = app_code_lesson_current_id(context);
  let lesson = app_code_lesson_incomplete_next(context, number, id);
  let none = null_is(lesson);
  return none;
}
