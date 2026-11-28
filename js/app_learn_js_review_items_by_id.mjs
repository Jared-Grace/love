import { app_learn_js_review_lesson_by_id } from "./app_learn_js_review_lesson_by_id.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_review_items_by_id(lesson_id) {
  "the current batch items for a lesson found by its id; each call generates fresh instances";
  let lesson = app_learn_js_review_lesson_by_id(lesson_id);
  let batch = property_get(lesson, "batch");
  let items = batch();
  return items;
}
