import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_restart_button(r3, r9) {
  arguments_assert(arguments, 2);
  let passed = property_get(r3, "passed");
  let progress = property_get(r3, "progress");
  let go_next = property_get(r3, "go_next");
  let skip_button = property_get(r3, "skip_button");
  let queue = property_get(r3, "queue");
  let key = property_get(r3, "key");
  let c = property_get(r3, "c");
  let success_container = property_get(r3, "success_container");
  let restart_button = property_get(r9, "restart_button");
  let r = {
    passed,
    progress,
    go_next,
    skip_button,
    queue,
    key,
    c,
    success_container,
    restart_button,
  };
  return r;
}
