import { app_code_lesson_find_by_id } from "../../../love/public/src/app_code_lesson_find_by_id.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
export function app_code_lesson_current(context) {
  let lessons = app_code_lessons();
  let first_id = app_code_lesson_first_id();
  let lesson_id = storage_local_initialize_context(
    context,
    "lesson_id",
    first_id,
  );
  let lesson = app_code_lesson_find_by_id(lessons, lesson_id);
  return lesson;
}
