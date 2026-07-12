import { list_find_property } from "./list_find_property.mjs";
export function app_code_lesson_find_by_id(lessons, lesson_id) {
  let item = list_find_property(lessons, "id", lesson_id);
  return item;
}
