import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { app_code_lesson_index_by_id } from "../../../love/public/src/app_code_lesson_index_by_id.mjs";
export function app_code_lesson_last_is(context, lesson_id) {
  let lessons = app_code_lessons();
  let index = app_code_lesson_index_by_id(context, lesson_id);
  return index;
}
