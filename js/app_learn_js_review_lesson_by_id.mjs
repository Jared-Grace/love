import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
import { app_learn_js_lesson_find_by_id } from "./app_learn_js_lesson_find_by_id.mjs";
export function app_learn_js_review_lesson_by_id(lesson_id) {
  arguments_assert(arguments, 1);
  ("a fresh lesson found by its id; each call makes a new one, so what it remembers starts empty");
  let lessons = app_learn_js_lessons();
  let lesson = app_learn_js_lesson_find_by_id(lessons, lesson_id);
  return lesson;
}
