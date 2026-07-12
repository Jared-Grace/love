import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_find_by_id } from "./app_code_lesson_find_by_id.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
export function app_code_lesson_current(context) {
  let lessons = app_code_lessons();
  let lesson_id = app_code_lesson_current_id(context);
  let lesson = app_code_lesson_find_by_id(lessons, lesson_id);
  return lesson;
}
