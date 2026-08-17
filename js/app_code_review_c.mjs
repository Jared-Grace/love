import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_skip_button } from "./app_code_review_skip_button.mjs";
import { app_code_review_arrow } from "./app_code_review_arrow.mjs";
import { app_code_review_go_restart } from "./app_code_review_go_restart.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_c(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_review_skip_button(context, root);
  let r3 = app_code_review_arrow(r2);
  let r4 = app_code_review_go_restart(r3, context);
  let go_restart = property_get(r4, "go_restart");
  let skip_button = property_get(r4, "skip_button");
  let go_next = property_get(r4, "go_next");
  let queue = property_get(r4, "queue");
  let passed = property_get(r4, "passed");
  let key = property_get(r4, "key");
  let g = property_get(r4, "g");
  let progress = property_get(r4, "progress");
  let success_container = property_get(r4, "success_container");
  let c = property_get(r4, "c");
  return {
    r4,
    go_restart,
    skip_button,
    go_next,
    queue,
    passed,
    key,
    g,
    progress,
    success_container,
    c,
  };
}
