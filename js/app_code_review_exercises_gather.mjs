import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { range_map } from "./range_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_exercises_gather(lessons) {
  "for each lesson, for each quiz kind (forward, backward), one random batch item's exercise of that kind; concatenated across lessons and shuffled";
  function each_lesson(lesson) {
    let batch = property_get(lesson, "batch");
    let items = batch();
    let first = list_first(items);
    let kinds = property_get(first, "exercises");
    let kind_count = list_size(kinds);
    function each_kind(kind_index) {
      let item = list_random_item(items);
      let exercises = property_get(item, "exercises");
      let exercise = list_get(exercises, kind_index);
      return exercise;
    }
    let per_kind = range_map(kind_count, each_kind);
    return per_kind;
  }
  let per_lesson = list_map(lessons, each_lesson);
  let all = list_concat_multiple(per_lesson);
  list_shuffle(all);
  return all;
}
