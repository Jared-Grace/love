import { list_first_property } from "../../../love/public/src/list_first_property.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
export function app_code_lesson_first_id() {
  let lessons2 = app_code_lessons();
  let value = list_first_property(lessons2, "id");
  return value;
}
