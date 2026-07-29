import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_first } from "./list_first.mjs";
export function app_code_lesson_current(context) {
  "the lesson this tab is on, found by its saved id; a stale or renamed id - one saved in an older session, or an old bookmark whose lesson was renamed or removed - resolves to nothing, and rather than crash the whole app we fall back to the first lesson";
  let lessons = app_code_lessons();
  let lesson_id = app_code_lesson_current_id(context);
  let lesson = list_find_property_or_null(lessons, "id", lesson_id);
  let missing = null_is(lesson);
  if (missing) {
    let first = list_first(lessons);
    return first;
  }
  return lesson;
}
