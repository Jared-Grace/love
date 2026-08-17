import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_c } from "./app_code_review_c.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_restart_text } from "./app_code_review_restart_text.mjs";
export function app_code_review_passed(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_review_c(context, root);
  let c = property_get(r2, "c");
  let success_container = property_get(r2, "success_container");
  let r3 = app_code_review_restart_text(r2);
  let restart_text = property_get(r3, "restart_text");
  let back_button = property_get(r3, "back_button");
  let has_next = property_get(r3, "has_next");
  let go_restart = property_get(r3, "go_restart");
  let skip_button = property_get(r3, "skip_button");
  let go_next = property_get(r3, "go_next");
  let queue = property_get(r3, "queue");
  let passed = property_get(r3, "passed");
  let r = {
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
  };
  return r;
}
