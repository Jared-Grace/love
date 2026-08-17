import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
export function app_code_review_home_text(r6) {
  arguments_assert(arguments, 1);
  let restart_button = property_get(r6, "restart_button");
  let passed = property_get(r6, "passed");
  let queue = property_get(r6, "queue");
  let go_next = property_get(r6, "go_next");
  let skip_button = property_get(r6, "skip_button");
  let has_next = property_get(r6, "has_next");
  let back_button = property_get(r6, "back_button");
  let success_container = property_get(r6, "success_container");
  let c = property_get(r6, "c");
  let key = property_get(r6, "key");
  let progress = property_get(r6, "progress");
  app_shared_button_gap_above(restart_button);
  let home_text = app_shared_button_home_text();
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
    home_text,
  };
  return r;
}
