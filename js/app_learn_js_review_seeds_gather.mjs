import { property_get } from "./property_get.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_review_seed_from_items } from "./app_learn_js_review_seed_from_items.mjs";
import { list_get } from "./list_get.mjs";
import { range } from "./range.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export function app_learn_js_review_seeds_gather(lessons, kind_is) {
  "for each lesson, for each quiz kind kind_is accepts, one random batch item, as a JSON-safe seed {lesson_id, kind_index, question, answer}; concatenated and shuffled so a review can be persisted and resumed";
  "The kinds are filtered as positions rather than the list being narrowed, because a seed is rebuilt by its position among all of the lesson's kinds.";
  function each_lesson(lesson) {
    let lesson_id = property_get(lesson, "id");
    let batch = property_get(lesson, "batch");
    let items = batch();
    let kinds = list_first_property(items, "exercises");
    let kind_count = list_size(kinds);
    function each_kind(kind_index) {
      let seed = app_learn_js_review_seed_from_items(
        lesson_id,
        kind_index,
        items,
      );
      return seed;
    }
    function kind_asked(kind_index) {
      let kind = list_get(kinds, kind_index);
      let asked = kind_is(kind);
      return asked;
    }
    let positions = range(kind_count);
    let asked_positions = list_filter(positions, kind_asked);
    let per_kind = list_map(asked_positions, each_kind);
    return per_kind;
  }
  let all = list_map_concat_multiple(lessons, each_lesson);
  list_shuffle(all);
  return all;
}
