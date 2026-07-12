import { list_first_property } from "./list_first_property.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
export function app_code_lesson_first_id() {
  let lessons = app_code_lessons();
  let value = list_first_property(lessons, "id");
  return value;
}
