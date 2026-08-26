import { app_code_review_containers } from "./app_code_review_containers.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_load } from "./app_code_review_load.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_state_key } from "./app_code_review_state_key.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_review_go_to_lesson } from "./app_code_review_go_to_lesson.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_review_next_lesson(context, root) {
  arguments_assert(arguments, 2);
  let number = app_code_review_number_get(context);
  let loaded = app_code_review_load(context, number);
  let queue = property_get(loaded, "queue");
  let passed = property_get(loaded, "passed");
  let key = app_code_review_state_key(number);
  let frame = app_code_review_containers(root);
  let g = property_get(frame, "g");
  let progress = property_get(frame, "progress");
  let success_container = property_get(frame, "success_container");
  let c = property_get(frame, "c");
  let lessons = app_code_lessons();
  let lessons_count = list_size(lessons);
  let previous_index = subtract(number, 1);
  let previous_lesson = list_get(lessons, previous_index);
  async function go_previous() {
    await app_code_review_go_to_lesson(previous_lesson, context);
  }
  let next_index = number;
  let has_next = less_than(next_index, lessons_count);
  let next_lesson = null;
  let r = {
    queue,
    passed,
    key,
    g,
    progress,
    success_container,
    c,
    lessons,
    go_previous,
    next_index,
    has_next,
    next_lesson,
  };
  return r;
}
