import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_progress(r3) {
  arguments_assert(arguments, 1);
  let key = property_get(r3, "key");
  let c = property_get(r3, "c");
  let success_container = property_get(r3, "success_container");
  let back_button = property_get(r3, "back_button");
  let has_next = property_get(r3, "has_next");
  let skip_button = property_get(r3, "skip_button");
  let go_next = property_get(r3, "go_next");
  let r2 = property_get(r3, "r2");
  let progress = property_get(r2, "progress");
  let r = {
    key,
    c,
    success_container,
    back_button,
    has_next,
    skip_button,
    go_next,
    progress,
  };
  return r;
}
