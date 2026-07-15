import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_exercises_gather(lessons) {
  "one exercise per lesson: the forward read-this-code question from a freshly generated batch, then shuffled";
  function each_lesson(lesson) {
    let batch = property_get(lesson, "batch");
    let items = batch();
    let first_item = list_first(items);
    let exercises = property_get(first_item, "exercises");
    let first_exercise = list_first(exercises);
    return first_exercise;
  }
  let all = list_map(lessons, each_lesson);
  list_shuffle(all);
  return all;
}
