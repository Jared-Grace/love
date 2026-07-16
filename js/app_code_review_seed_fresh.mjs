import { app_code_review_items_by_id } from "./app_code_review_items_by_id.mjs";
import { app_code_review_seed_from_items } from "./app_code_review_seed_from_items.mjs";
export function app_code_review_seed_fresh(lesson_id, kind_index) {
  "a NEW seed for the same lesson and quiz kind, with a freshly generated question — used when a wrongly-answered review item is requeued, so the learner re-tests the CONCEPT on a different instance rather than the memorized exact wording";
  let items = app_code_review_items_by_id(lesson_id);
  let seed = app_code_review_seed_from_items(lesson_id, kind_index, items);
  return seed;
}
