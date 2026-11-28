import { property_get } from "./property_get.mjs";
import { app_learn_js_review_lesson_by_id } from "./app_learn_js_review_lesson_by_id.mjs";
import { app_learn_js_review_seed_inputs_restore } from "./app_learn_js_review_seed_inputs_restore.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_get } from "./list_get.mjs";
export function app_learn_js_review_seed_to_exercise(seed) {
  "rebuild a live exercise {info, question, answer, batch_get} from a persisted seed; info and batch_get are stable per lesson+kind, so a fresh batch item supplies them while the seed keeps the exact question and answer";
  let lesson_id = property_get(seed, "lesson_id");
  let kind_index = property_get(seed, "kind_index");
  let question = property_get(seed, "question");
  let answer = property_get(seed, "answer");
  let lesson = app_learn_js_review_lesson_by_id(lesson_id);
  let batch = property_get(lesson, "batch");
  let items = batch();
  app_learn_js_review_seed_inputs_restore(lesson, seed);
  let exercises = list_first_property(items, "exercises");
  let template = list_get(exercises, kind_index);
  let info = property_get(template, "info");
  let batch_get = property_get(template, "batch_get");
  let exercise = {
    info,
    question,
    answer,
    batch_get,
  };
  return exercise;
}
