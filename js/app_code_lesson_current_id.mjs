import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_lesson_current_id(context) {
  "which lesson this tab is on belongs to this tab, so two tabs can sit on two lessons; a saved id that no longer names a real lesson - a lesson renamed or removed since an older session saved it - is dropped in favour of the first lesson, so one stale id can never point every lookup at nothing and crash the app";
  let first_id = app_code_lesson_first_id();
  let lesson_id = storage_session_initialize_context(
    context,
    "lesson_id",
    first_id,
  );
  let lessons = app_code_lessons();
  let found = list_find_property_or_null(lessons, "id", lesson_id);
  let missing = null_is(found);
  if (missing) {
    return first_id;
  }
  return lesson_id;
}
