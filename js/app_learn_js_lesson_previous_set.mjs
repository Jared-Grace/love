import { app_learn_js_lesson_ids } from "./app_learn_js_lesson_ids.mjs";
import { list_previous } from "./list_previous.mjs";
import { app_learn_js_lesson_first_id } from "./app_learn_js_lesson_first_id.mjs";
import { storage_session_transform_context } from "./storage_session_transform_context.mjs";
export function app_learn_js_lesson_previous_set(context) {
  function lambda(value) {
    let ids = app_learn_js_lesson_ids();
    let value_new = list_previous(ids, value);
    return value_new;
  }
  let value_initial = app_learn_js_lesson_first_id();
  storage_session_transform_context(
    context,
    "lesson_id",
    value_initial,
    lambda,
  );
}
