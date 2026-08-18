import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_present_key } from "./app_code_review_present_key.mjs";
import { app_code_review_present_progress } from "./app_code_review_present_progress.mjs";
import { app_code_review_present_queue } from "./app_code_review_present_queue.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_has_next(r9) {
  arguments_assert(arguments, 1);
  let r3 = app_code_review_present_key(r9);
  let r2 = app_code_review_present_progress(r3);
  let r4 = app_code_review_present_queue(r2, r9);
  let queue = property_get(r4, "queue");
  let key = property_get(r4, "key");
  let c = property_get(r4, "c");
  let success_container = property_get(r4, "success_container");
  let back_button = property_get(r4, "back_button");
  let has_next = property_get(r4, "has_next");
  let r = {
    r4,
    queue,
    key,
    c,
    success_container,
    back_button,
    has_next,
  };
  return r;
}
