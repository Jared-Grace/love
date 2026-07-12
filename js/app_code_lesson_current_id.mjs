import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
export function app_code_lesson_current_id(context) {
  let first_id = app_code_lesson_first_id();
  let lesson_id = storage_local_initialize_context(
    context,
    "lesson_id",
    first_id,
  );
  return lesson_id;
}
