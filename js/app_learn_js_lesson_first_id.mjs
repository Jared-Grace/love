import { list_first_property } from "./list_first_property.mjs";
import { app_learn_js_lessons } from "./app_learn_js_lessons.mjs";
export function app_learn_js_lesson_first_id() {
  let lessons = app_learn_js_lessons();
  let value = list_first_property(lessons, "id");
  return value;
}
