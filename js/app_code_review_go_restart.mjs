import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_review } from "./app_code_review.mjs";
export function app_code_review_go_restart(r3, context) {
  arguments_assert(arguments, 2);
  let back_button = property_get(r3, "back_button");
  let has_next = property_get(r3, "has_next");
  let c = property_get(r3, "c");
  let success_container = property_get(r3, "success_container");
  let progress = property_get(r3, "progress");
  let g = property_get(r3, "g");
  let key = property_get(r3, "key");
  let passed = property_get(r3, "passed");
  let queue = property_get(r3, "queue");
  let go_next = property_get(r3, "go_next");
  let skip_button = property_get(r3, "skip_button");
  async function go_restart() {
    storage_local_remove_context(context, key);
    await app_shared_screen_set(context, app_code_review);
  }
  let r = {
    back_button,
    has_next,
    c,
    success_container,
    progress,
    g,
    key,
    passed,
    queue,
    go_next,
    skip_button,
    go_restart,
  };
  return r;
}
