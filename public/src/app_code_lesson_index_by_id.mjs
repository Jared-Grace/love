import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { app_code_lesson_find_by_id } from "../../../love/public/src/app_code_lesson_find_by_id.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
export function app_code_lesson_index_by_id(context, lesson_id) {
  let lessons = app_code_lessons();
  let lesson = app_code_lesson_find_by_id(lessons, lesson_id);
  let index = list_index_of(list, item);
  return lesson;
}
