import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_present_key } from "./app_code_review_present_key.mjs";
import { app_code_review_present_progress } from "./app_code_review_present_progress.mjs";
import { app_code_review_present_queue } from "./app_code_review_present_queue.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_has_next(r9) {
  arguments_assert(arguments, 1);
  let progress = property_get(r9, "progress");
  let key2 = property_get(r9, "key");
  let c2 = property_get(r9, "c");
  let success_container2 = property_get(r9, "success_container");
  let back_button2 = property_get(r9, "back_button");
  let has_next2 = property_get(r9, "has_next");
  let skip_button2 = property_get(r9, "skip_button");
  let go_next2 = property_get(r9, "go_next");
  let r32 = {
    progress,
    key: key2,
    c: c2,
    success_container: success_container2,
    back_button: back_button2,
    has_next: has_next2,
    skip_button: skip_button2,
    go_next: go_next2,
  };
  let r22 = r32;
  let go_next = property_get(r22, "go_next");
  let skip_button = property_get(r22, "skip_button");
  let has_next3 = property_get(r22, "has_next");
  let back_button3 = property_get(r22, "back_button");
  let success_container3 = property_get(r22, "success_container");
  let c3 = property_get(r22, "c");
  let key3 = property_get(r22, "key");
  let r5 = {
    r2: r22,
    go_next,
    skip_button,
    has_next: has_next3,
    back_button: back_button3,
    success_container: success_container3,
    c: c3,
    key: key3,
  };
  let r3 = r5;
  let key4 = property_get(r3, "key");
  let c4 = property_get(r3, "c");
  let success_container4 = property_get(r3, "success_container");
  let back_button4 = property_get(r3, "back_button");
  let has_next4 = property_get(r3, "has_next");
  let skip_button3 = property_get(r3, "skip_button");
  let go_next3 = property_get(r3, "go_next");
  let r23 = property_get(r3, "r2");
  let progress2 = property_get(r23, "progress");
  let r6 = {
    key: key4,
    c: c4,
    success_container: success_container4,
    back_button: back_button4,
    has_next: has_next4,
    skip_button: skip_button3,
    go_next: go_next3,
    progress: progress2,
  };
  let r2 = r6;
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
