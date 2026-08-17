import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_restart_text } from "./app_shared_button_restart_text.mjs";
export function app_code_review_restart_text(r2) {
  arguments_assert(arguments, 1);
  let progress = property_get(r2, "progress");
  let g = property_get(r2, "g");
  let key = property_get(r2, "key");
  let passed = property_get(r2, "passed");
  let queue = property_get(r2, "queue");
  let go_next = property_get(r2, "go_next");
  let skip_button = property_get(r2, "skip_button");
  let go_restart = property_get(r2, "go_restart");
  let r4 = property_get(r2, "r4");
  let has_next = property_get(r4, "has_next");
  let back_button = property_get(r4, "back_button");
  let restart_text = app_shared_button_restart_text("Restart review");
  let r = {
    progress,
    g,
    key,
    passed,
    queue,
    go_next,
    skip_button,
    go_restart,
    has_next,
    back_button,
    restart_text,
  };
  return r;
}
