import { storage_local_transform_context } from "./storage_local_transform_context.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { list_property_next_value } from "./list_property_next_value.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
export async function app_code_lesson_next(context) {
  "advance from the current lesson to the next one and show its examples";
  function lesson_id_transform(value) {
    let lessons = app_code_lessons();
    let value_next = list_property_next_value(lessons, "id", value);
    return value_next;
  }
  let value_initial = app_code_lesson_first_id();
  storage_local_transform_context(
    context,
    "lesson_id",
    value_initial,
    lesson_id_transform,
  );
  await app_shared_screen_set(context, app_code_examples);
}
