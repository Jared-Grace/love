import { storage_local_transform_context } from "./storage_local_transform_context.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { list_property_previous_value } from "./list_property_previous_value.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
export function app_code_lesson_previous_set(context) {
  function lambda(value) {
    let list = app_code_lessons();
    let value_new = list_property_previous_value(list, "id", value);
    return value_new;
  }
  let value_initial = app_code_lesson_first_id();
  storage_local_transform_context(context, "lesson_id", value_initial, lambda);
}
