import { list_index_last_is } from "./list_index_last_is.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_lesson_index_by_id } from "./app_code_lesson_index_by_id.mjs";
export function app_code_lesson_last_is(context, lesson_id) {
  let lessons = app_code_lessons();
  let index = app_code_lesson_index_by_id(context, lesson_id);
  let li = list_index_last_is(lessons, index);
  return li;
}
