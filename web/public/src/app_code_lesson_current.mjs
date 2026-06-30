import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { list_first_property } from "../../../love/public/src/list_first_property.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
export function app_code_lesson_current(context) {
  let lessons = app_code_lessons();
  let value = list_first_property(lessons, "id");
  let lesson_id = storage_local_initialize_context(context, "lesson_id", value);
  let lesson = list_find_property(lessons, "id", lesson_id);
  return lesson;
}
