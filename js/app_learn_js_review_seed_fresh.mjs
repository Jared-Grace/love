import { app_learn_js_review_lesson_by_id } from "./app_learn_js_review_lesson_by_id.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_review_seed_from_items } from "./app_learn_js_review_seed_from_items.mjs";
import { app_learn_js_review_seed_inputs_add } from "./app_learn_js_review_seed_inputs_add.mjs";
export function app_learn_js_review_seed_fresh(lesson_id, kind_index) {
  "a NEW seed for the same lesson and quiz kind, with a freshly generated question — used when a wrongly-answered review item is requeued, so the learner re-tests the CONCEPT on a different instance rather than the memorized exact wording";
  let lesson = app_learn_js_review_lesson_by_id(lesson_id);
  let batch = property_get(lesson, "batch");
  let items = batch();
  let seed = app_learn_js_review_seed_from_items(lesson_id, kind_index, items);
  app_learn_js_review_seed_inputs_add(lesson, seed);
  return seed;
}
