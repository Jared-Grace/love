import { app_learn_js_lesson_current_id } from "./app_learn_js_lesson_current_id.mjs";
import { app_learn_js_lesson_find_by_id } from "./app_learn_js_lesson_find_by_id.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
export function app_learn_js_lesson_current(context) {
  let lessons = app_learn_js_lessons();
  let lesson_id = app_learn_js_lesson_current_id(context);
  let lesson = app_learn_js_lesson_find_by_id(lessons, lesson_id);
  return lesson;
}
