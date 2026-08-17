import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_code_review_restart_button(r3, g) {
  arguments_assert(arguments, 2);
  let progress = property_get(r3, "progress");
  let key = property_get(r3, "key");
  let c = property_get(r3, "c");
  let success_container = property_get(r3, "success_container");
  let restart_text = property_get(r3, "restart_text");
  let back_button = property_get(r3, "back_button");
  let has_next = property_get(r3, "has_next");
  let go_restart = property_get(r3, "go_restart");
  let skip_button = property_get(r3, "skip_button");
  let go_next = property_get(r3, "go_next");
  let queue = property_get(r3, "queue");
  let passed = property_get(r3, "passed");
  let restart_button = app_shared_button_wide(g, restart_text, go_restart);
  let r = {
    progress,
    key,
    c,
    success_container,
    back_button,
    has_next,
    skip_button,
    go_next,
    queue,
    passed,
    restart_button,
  };
  return r;
}
