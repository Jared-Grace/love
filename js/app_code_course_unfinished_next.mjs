import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_reviews_complete_read } from "./app_code_reviews_complete_read.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { not } from "./not.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_code_review_complete_is } from "./app_code_review_complete_is.mjs";
export function app_code_course_unfinished_next(
  context,
  index_start,
  id_skipped,
) {
  "$plain index_start";
  "$plain id_skipped";
  "The next thing in the course this learner has not finished - a lesson or a review, whichever comes first in the order the course is walked - looking from one lesson onwards, or nothing at all where everything from there on is finished.";
  "A REVIEW COUNTS, because it stands in the course between two lessons and a learner who skipped it has left it unfinished exactly as they would a lesson. The button that offers this said lesson and passed over reviews, so a learner who had skipped a review was sent past it with nothing on the page saying so - at the human's request, 2026-09-27.";
  "Each lesson is looked at BEFORE the review standing under it, because that is the order the course walks them in. A caller leaving a lesson starts the search AT that lesson and names it as skipped, so the review straight after it is the first thing looked at; a caller leaving a review starts at the lesson after it.";
  "It never goes round the top of the list, for the reason the lesson-only search gives: every caller labels its button as a way on.";
  "What comes back says WHICH KIND it is, with the lesson for a lesson and the number the review stands under for a review, because the two are gone to in different ways and named to the learner in different words.";
  arguments_assert(arguments, 3);
  let lessons = app_code_lessons();
  let progress = app_code_progress_read(context);
  let reviews_complete = app_code_reviews_complete_read(context);
  let count = list_size(lessons);
  let index = index_start;
  while (less_than(index, count)) {
    let lesson = list_get(lessons, index);
    let id = property_get(lesson, "id");
    let left_behind = equal(id, id_skipped);
    let complete = app_code_lesson_complete_is(progress, id);
    if (not(left_behind) && not(complete)) {
      let way_lesson = {
        kind: "lesson",
        lesson,
        number: null,
      };
      return way_lesson;
    }
    let number = add_1(index);
    let due = app_code_review_due_is(number);
    if (due) {
      let review_complete = app_code_review_complete_is(
        reviews_complete,
        number,
      );
      if (not(review_complete)) {
        let way_review = {
          kind: "review",
          lesson: null,
          number,
        };
        return way_review;
      }
    }
    index = number;
  }
  return null;
}
