import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_g(r4) {
  arguments_assert(arguments, 1);
  let key = property_get(r4, "key");
  let c = property_get(r4, "c");
  let success_container = property_get(r4, "success_container");
  let r3 = property_get(r4, "r3");
  let restart_text = property_get(r4, "restart_text");
  let back_button = property_get(r4, "back_button");
  let has_next = property_get(r4, "has_next");
  let go_restart = property_get(r4, "go_restart");
  let skip_button = property_get(r4, "skip_button");
  let go_next = property_get(r4, "go_next");
  let queue = property_get(r4, "queue");
  let passed = property_get(r4, "passed");
  let g = property_get(r3, "g");
  let r = {
    key,
    c,
    success_container,
    r3,
    restart_text,
    back_button,
    has_next,
    go_restart,
    skip_button,
    go_next,
    queue,
    passed,
    g,
  };
  return r;
}
