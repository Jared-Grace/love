import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_back_button } from "./app_code_review_back_button.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
export function app_code_review_skip_button(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_review_back_button(context, root);
  let back_button = property_get(r2, "back_button");
  let has_next = property_get(r2, "has_next");
  let c = property_get(r2, "c");
  let success_container = property_get(r2, "success_container");
  let progress = property_get(r2, "progress");
  let g = property_get(r2, "g");
  let key = property_get(r2, "key");
  let passed = property_get(r2, "passed");
  let queue = property_get(r2, "queue");
  let go_next = property_get(r2, "go_next");
  app_shared_button_gap_above(back_button);
  let skip_button = null;
  let r = {
    back_button,
    has_next,
    c,
    success_container,
    progress,
    g,
    key,
    passed,
    queue,
    go_next,
    skip_button,
  };
  return r;
}
