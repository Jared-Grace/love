import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_next_lesson } from "./app_code_review_next_lesson.mjs";
import { app_code_review_back } from "./app_code_review_back.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
export function app_code_review_back_button(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_review_next_lesson(context, root);
  let r3 = app_code_review_back(r2, context);
  let back = property_get(r3, "back");
  let go_next = property_get(r3, "go_next");
  let queue = property_get(r3, "queue");
  let passed = property_get(r3, "passed");
  let key = property_get(r3, "key");
  let g = property_get(r3, "g");
  let progress = property_get(r3, "progress");
  let success_container = property_get(r3, "success_container");
  let c = property_get(r3, "c");
  let go_previous = property_get(r3, "go_previous");
  let has_next = property_get(r3, "has_next");
  let back_button = app_shared_button_wide_text_combine(
    g,
    back,
    " to the previous lesson",
    go_previous,
  );
  let r = {
    go_next,
    queue,
    passed,
    key,
    g,
    progress,
    success_container,
    c,
    has_next,
    back_button,
  };
  return r;
}
