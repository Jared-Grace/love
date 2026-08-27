import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_review_go_to_lesson } from "./app_code_review_go_to_lesson.mjs";
import { app_code_review_persist } from "./app_code_review_persist.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
export function app_code_review_back(r2, context) {
  arguments_assert(arguments, 2);
  let next_lesson = property_get(r2, "next_lesson");
  let has_next = property_get(r2, "has_next");
  let next_index = property_get(r2, "next_index");
  let go_previous = property_get(r2, "go_previous");
  let lessons = property_get(r2, "lessons");
  let c = property_get(r2, "c");
  let success_container = property_get(r2, "success_container");
  let progress = property_get(r2, "progress");
  let g = property_get(r2, "g");
  let key = property_get(r2, "key");
  let passed = property_get(r2, "passed");
  let queue = property_get(r2, "queue");
  if (has_next) {
    next_lesson = list_get(lessons, next_index);
  }
  ("the way on from a review is the next lesson the learner has NOT finished - a blue row on the home list rather than a green one - looked for from the lesson this review stands in front of and carrying on round the top of the list where everything below is done. A review sat between lessons a learner had already been through would otherwise walk them forward into work they had finished, one green lesson at a time, while the lesson they still owed sat somewhere they were never offered");
  ("no lesson is named as the one being left, because a review is not a lesson - the learner arrived here from the list or from the lesson before it, and every lesson in the course is a fair place to send them on to");
  let lesson_none = null;
  let unfinished = app_code_lesson_incomplete_next(
    context,
    next_index,
    lesson_none,
  );
  let found = null_not_is(unfinished);
  if (found) {
    next_lesson = unfinished;
  }
  ("so the button is there whenever there is anywhere at all to go: an unfinished lesson anywhere in the list, or the lesson straight after this review. That is wider than the lesson after this review alone - the last review in the course used to end in nothing, even with blue rows still above it");
  has_next = null_not_is(next_lesson);
  async function go_next() {
    await app_code_review_go_to_lesson(next_lesson, context);
  }
  app_code_review_persist(context, key, passed, queue);
  ("every one of the four ways off this screen stands off from the one above it by the app's own gap, the same as the buttons at the foot of a lesson - four buttons touching read as one block of text to get past rather than as four things to choose between");
  let back = app_shared_button_back_text();
  let r = {
    has_next,
    go_previous,
    c,
    success_container,
    progress,
    g,
    key,
    passed,
    queue,
    go_next,
    back,
  };
  return r;
}
