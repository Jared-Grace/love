import { storage_session_transform_context } from "./storage_session_transform_context.mjs";
import { app_learn_js_lesson_first_id } from "./app_learn_js_lesson_first_id.mjs";
import { list_property_previous_value } from "./list_property_previous_value.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
export function app_learn_js_lesson_previous_set(context) {
  function lambda(value) {
    let list = app_learn_js_lessons();
    let value_new = list_property_previous_value(list, "id", value);
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
