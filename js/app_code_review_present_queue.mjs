import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_queue(r2, r9) {
  arguments_assert(arguments, 2);
  let progress = property_get(r2, "progress");
  let go_next = property_get(r2, "go_next");
  let skip_button = property_get(r2, "skip_button");
  let has_next = property_get(r2, "has_next");
  let back_button = property_get(r2, "back_button");
  let success_container = property_get(r2, "success_container");
  let c = property_get(r2, "c");
  let key = property_get(r2, "key");
  let queue = property_get(r9, "queue");
  let r = {
    progress,
    go_next,
    skip_button,
    has_next,
    back_button,
    success_container,
    c,
    key,
    queue,
  };
  return r;
}
