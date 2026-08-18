import { app_code_review_present_present } from "./app_code_review_present_present.mjs";
import { app_code_review_present_restart_button } from "./app_code_review_present_restart_button.mjs";
import { app_code_review_present_passed } from "./app_code_review_present_passed.mjs";
import { app_code_review_present_has_next } from "./app_code_review_present_has_next.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present(r, home_button, context) {
  arguments_assert(arguments, 3);
  let r2 = app_code_review_present_has_next(r);
  let has_next = property_get(r2, "has_next");
  let back_button = property_get(r2, "back_button");
  let success_container2 = property_get(r2, "success_container");
  let c = property_get(r2, "c");
  let key = property_get(r2, "key");
  let queue = property_get(r2, "queue");
  let r42 = property_get(r2, "r4");
  let skip_button = property_get(r42, "skip_button");
  let go_next = property_get(r42, "go_next");
  let progress = property_get(r42, "progress");
  let passed = property_get(r, "passed");
  let r5 = {
    success_container: success_container2,
    c,
    key,
    queue,
    skip_button,
    go_next,
    progress,
    passed,
  };
  let r3 = r5;
  let passed2 = property_get(r3, "passed");
  let progress2 = property_get(r3, "progress");
  let go_next2 = property_get(r3, "go_next");
  let skip_button2 = property_get(r3, "skip_button");
  let queue2 = property_get(r3, "queue");
  let key2 = property_get(r3, "key");
  let c2 = property_get(r3, "c");
  let success_container3 = property_get(r3, "success_container");
  let restart_button2 = property_get(r, "restart_button");
  let r6 = {
    passed: passed2,
    progress: progress2,
    go_next: go_next2,
    skip_button: skip_button2,
    queue: queue2,
    key: key2,
    c: c2,
    success_container: success_container3,
    restart_button: restart_button2,
  };
  let r4 = r6;
  let restart_button = property_get(r4, "restart_button");
  let success_container = property_get(r4, "success_container");
  let present = app_code_review_present_present(
    r4,
    home_button,
    success_container,
    back_button,
    restart_button,
    has_next,
    context,
  );
  return present;
}
