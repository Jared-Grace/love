import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_exercises_gather(lessons) {
  "generate one batch per lesson, collect its exercises, concatenate across lessons, shuffle";
  function each_lesson(lesson) {
    let batch = property_get(lesson, "batch");
    let items = batch();
    function each_item(item) {
      let exercises = property_get(item, "exercises");
      return exercises;
    }
    let per_item = list_map(items, each_item);
    let flat = list_concat_multiple(per_item);
    return flat;
  }
  let per_lesson = list_map(lessons, each_lesson);
  let all = list_concat_multiple(per_lesson);
  list_shuffle(all);
  return all;
}
