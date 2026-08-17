import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_code_review_home_button(r8, g, go_home) {
  arguments_assert(arguments, 3);
  let restart_button = property_get(r8, "restart_button");
  let passed = property_get(r8, "passed");
  let queue = property_get(r8, "queue");
  let go_next = property_get(r8, "go_next");
  let skip_button = property_get(r8, "skip_button");
  let has_next = property_get(r8, "has_next");
  let back_button = property_get(r8, "back_button");
  let success_container = property_get(r8, "success_container");
  let c = property_get(r8, "c");
  let key = property_get(r8, "key");
  let progress = property_get(r8, "progress");
  let home_text = property_get(r8, "home_text");
  let home_button = app_shared_button_wide(g, home_text, go_home);
  let r = {
    restart_button,
    passed,
    queue,
    go_next,
    skip_button,
    has_next,
    back_button,
    success_container,
    c,
    key,
    progress,
    home_button,
  };
  return r;
}
