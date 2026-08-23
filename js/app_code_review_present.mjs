import { app_code_review_present_fn } from "./app_code_review_present_fn.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present(r, home_button, context) {
  arguments_assert(arguments, 3);
  let progress4 = property_get(r, "progress");
  let key22 = property_get(r, "key");
  let c22 = property_get(r, "c");
  let success_container22 = property_get(r, "success_container");
  let back_button = property_get(r, "back_button");
  let has_next = property_get(r, "has_next");
  let skip_button22 = property_get(r, "skip_button");
  let go_next22 = property_get(r, "go_next");
  let queue22 = property_get(r, "queue");
  let passed = property_get(r, "passed");
  let restart_button2 = property_get(r, "restart_button");
  let r6 = {
    passed: passed,
    progress: progress4,
    go_next: go_next22,
    skip_button: skip_button22,
    queue: queue22,
    key: key22,
    c: c22,
    success_container: success_container22,
    restart_button: restart_button2,
  };
  let restart_button = property_get(r6, "restart_button");
  let success_container = property_get(r6, "success_container");
  let present = app_code_review_present_fn(
    r6,
    home_button,
    success_container,
    back_button,
    restart_button,
    has_next,
    context,
  );
  return present;
}
