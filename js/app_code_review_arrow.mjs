import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
export function app_code_review_arrow(r2) {
  arguments_assert(arguments, 1);
  let skip_button = property_get(r2, "skip_button");
  let go_next = property_get(r2, "go_next");
  let queue = property_get(r2, "queue");
  let passed = property_get(r2, "passed");
  let key = property_get(r2, "key");
  let g = property_get(r2, "g");
  let progress = property_get(r2, "progress");
  let success_container = property_get(r2, "success_container");
  let c = property_get(r2, "c");
  let has_next = property_get(r2, "has_next");
  let back_button = property_get(r2, "back_button");
  if (has_next) {
    let arrow = emoji_arrow_right();
    let next_text = text_combine_middle_space_nb(
      arrow,
      "Skip this review and go to the next lesson",
    );
    skip_button = app_shared_button_wide(g, next_text, go_next);
    app_shared_button_gap_above(skip_button);
  }
  let r = {
    skip_button,
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
