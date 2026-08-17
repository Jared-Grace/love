import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_key(r2) {
  arguments_assert(arguments, 1);
  let passed = property_get(r2, "passed");
  let queue = property_get(r2, "queue");
  let go_next = property_get(r2, "go_next");
  let skip_button = property_get(r2, "skip_button");
  let go_restart = property_get(r2, "go_restart");
  let has_next = property_get(r2, "has_next");
  let back_button = property_get(r2, "back_button");
  let restart_text = property_get(r2, "restart_text");
  let r3 = property_get(r2, "r3");
  let success_container = property_get(r2, "success_container");
  let c = property_get(r2, "c");
  let key = property_get(r3, "key");
  let r = {
    passed,
    queue,
    go_next,
    skip_button,
    go_restart,
    has_next,
    back_button,
    restart_text,
    r3,
    success_container,
    c,
    key,
  };
  return r;
}
