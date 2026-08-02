import { property_list_get } from "./property_list_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_seed_from_items(lesson_id, kind_index, items) {
  "a JSON-safe review seed {lesson_id, kind_index, question, answer} from a random one of the lesson's batch items, for the given quiz kind";
  let item = list_random_item(items);
  let exercise = property_list_get(item, "exercises", kind_index);
  let question = property_get(exercise, "question");
  let answer = property_get(exercise, "answer");
  let seed = {
    lesson_id,
    kind_index,
    question,
    answer,
  };
  return seed;
}
