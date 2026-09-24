import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
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
  ("the way on from a review is the lesson straight after it, because the button says continue to the next lesson and goes where its word promises. It used to go to the next lesson the learner had NOT finished instead, so a learner could be carried past lessons with nothing on the page saying so; the unfinished one is now offered on a button of its own that says what it is, drawn where the review is finished");
  has_next = null_not_is(next_lesson);
  async function go_next() {
    await app_code_lesson_go(next_lesson, context);
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
