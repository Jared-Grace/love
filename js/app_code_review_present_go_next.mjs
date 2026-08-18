import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_go_next(r9) {
  arguments_assert(arguments, 1);
  let progress = property_get(r9, "progress");
  let key = property_get(r9, "key");
  let c = property_get(r9, "c");
  let success_container = property_get(r9, "success_container");
  let back_button = property_get(r9, "back_button");
  let has_next = property_get(r9, "has_next");
  let skip_button = property_get(r9, "skip_button");
  let go_next = property_get(r9, "go_next");
  let r = {
    progress,
    key,
    c,
    success_container,
    back_button,
    has_next,
    skip_button,
    go_next,
  };
  return r;
}
