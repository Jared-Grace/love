import { property_get } from "./property_get.mjs";
import { app_code_lesson_current } from "./app_code_lesson_current.mjs";
import { app_code_lesson_last_is } from "./app_code_lesson_last_is.mjs";
export function app_code_lesson_current_last_is(context) {
  let lesson = app_code_lesson_current(context);
  let id = property_get(lesson, "id");
  let li = app_code_lesson_last_is(context, id);
  return li;
}
