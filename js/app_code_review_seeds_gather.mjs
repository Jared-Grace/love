import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_review_seed_from_items } from "./app_code_review_seed_from_items.mjs";
import { range_map } from "./range_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_seeds_gather(lessons) {
  "for each lesson, for each quiz kind, one random batch item, as a JSON-safe seed {lesson_id, kind_index, question, answer}; concatenated and shuffled so a review can be persisted and resumed";
  function each_lesson(lesson) {
    let lesson_id = property_get(lesson, "id");
    let batch = property_get(lesson, "batch");
    let items = batch();
    let first = list_first(items);
    let kinds = property_get(first, "exercises");
    let kind_count = list_size(kinds);
    function each_kind(kind_index) {
      let seed = app_code_review_seed_from_items(lesson_id, kind_index, items);
      return seed;
    }
    let per_kind = range_map(kind_count, each_kind);
    return per_kind;
  }
  let per_lesson = list_map(lessons, each_lesson);
  let all = list_concat_multiple(per_lesson);
  list_shuffle(all);
  return all;
}
