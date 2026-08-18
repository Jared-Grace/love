import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_present_go_next } from "./app_code_review_present_go_next.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_key(r9) {
  arguments_assert(arguments, 1);
  let progress = property_get(r9, "progress");
  let key2 = property_get(r9, "key");
  let c2 = property_get(r9, "c");
  let success_container2 = property_get(r9, "success_container");
  let back_button2 = property_get(r9, "back_button");
  let has_next2 = property_get(r9, "has_next");
  let skip_button2 = property_get(r9, "skip_button");
  let go_next2 = property_get(r9, "go_next");
  let r3 = {
    progress,
    key: key2,
    c: c2,
    success_container: success_container2,
    back_button: back_button2,
    has_next: has_next2,
    skip_button: skip_button2,
    go_next: go_next2,
  };
  let r2 = r3;
  let go_next = property_get(r2, "go_next");
  let skip_button = property_get(r2, "skip_button");
  let has_next = property_get(r2, "has_next");
  let back_button = property_get(r2, "back_button");
  let success_container = property_get(r2, "success_container");
  let c = property_get(r2, "c");
  let key = property_get(r2, "key");
  let r = {
    r2,
    go_next,
    skip_button,
    has_next,
    back_button,
    success_container,
    c,
    key,
  };
  return r;
}
