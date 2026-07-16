import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_lesson_find_by_id } from "./app_code_lesson_find_by_id.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_items_by_id(lesson_id) {
  "the current batch items for a lesson found by its id; each call generates fresh instances";
  let lessons = app_code_lessons();
  let lesson = app_code_lesson_find_by_id(lessons, lesson_id);
  let batch = property_get(lesson, "batch");
  let items = batch();
  return items;
}
