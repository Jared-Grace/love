import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_code_lesson_ids() {
  "the ordered shareable ids of every code lesson (symbols_digits_numbered, operators_integer_division, ...), for crawling or deep-linking each lesson";
  let lessons = app_code_lessons();
  let ids = list_map_property(lessons, "id");
  return ids;
}
