import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_passed(r2, r9) {
  arguments_assert(arguments, 2);
  let success_container = property_get(r2, "success_container");
  let c = property_get(r2, "c");
  let key = property_get(r2, "key");
  let queue = property_get(r2, "queue");
  let r4 = property_get(r2, "r4");
  let skip_button = property_get(r4, "skip_button");
  let go_next = property_get(r4, "go_next");
  let progress = property_get(r4, "progress");
  let passed = property_get(r9, "passed");
  let r = {
    success_container,
    c,
    key,
    queue,
    skip_button,
    go_next,
    progress,
    passed,
  };
  return r;
}
