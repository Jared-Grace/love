import { list_index_last_is } from "./list_index_last_is.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
import { app_learn_js_lesson_index_by_id } from "./app_learn_js_lesson_index_by_id.mjs";
export function app_learn_js_lesson_last_is(lesson_id) {
  let lessons = app_learn_js_lessons();
  let index = app_learn_js_lesson_index_by_id(lesson_id);
  let li = list_index_last_is(lessons, index);
  return li;
}
