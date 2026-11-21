import { app_learn_js_lesson_first_id } from "./app_learn_js_lesson_first_id.mjs";
import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
import { app_learn_js_lesson_ids } from "./app_learn_js_lesson_ids.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function app_learn_js_lesson_current_id(context) {
  "which lesson this tab is on belongs to this tab, so two tabs can sit on two lessons; a saved id that no longer names a real lesson - a lesson renamed or removed since an older session saved it - is dropped in favour of the first lesson, so one stale id can never point every lookup at nothing and crash the app";
  let first_id = app_learn_js_lesson_first_id();
  let lesson_id = storage_session_initialize_context(
    context,
    "lesson_id",
    first_id,
  );
  let ids = app_learn_js_lesson_ids();
  let found = list_includes(ids, lesson_id);
  let missing = not(found);
  if (missing) {
    return first_id;
  }
  return lesson_id;
}
