import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_skip_button } from "./app_code_review_skip_button.mjs";
import { app_code_review_arrow } from "./app_code_review_arrow.mjs";
import { app_code_review_go_restart } from "./app_code_review_go_restart.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_checkpoint } from "./app_code_review_checkpoint.mjs";
import { app_code_review_button_unfinished } from "./app_code_review_button_unfinished.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_code_review_c(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_review_skip_button(context, root);
  let r3 = app_code_review_arrow(r2, context);
  let r4 = app_code_review_go_restart(r3, context);
  let go_restart = property_get(r4, "go_restart");
  let skip_button = property_get(r4, "skip_button");
  let go_next = property_get(r4, "go_next");
  let queue = property_get(r4, "queue");
  let passed = property_get(r4, "passed");
  let key = property_get(r4, "key");
  let g = property_get(r4, "g");
  ("the next thing this learner has not finished is offered among the ways off the screen from the start, not only once the review is finished - drawn where it is somewhere other than the lesson straight after the review, which happens when that lesson is already finished, at the human's request");
  let checkpoint = app_code_review_checkpoint(context);
  let number = property_get(checkpoint, "number");
  app_code_review_button_unfinished(context, g, number);
  ("A milestone's skip button says milestone, not review - asked for by the human 2026-10-23. Only a milestone has words to explain itself");
  let explain = property_get(checkpoint, "explain");
  if (list_empty_not_is(explain) && property_get(r3, "has_next")) {
    let left = emoji_arrow_right();
    let text = text_combine_middle_space_nb(
      left,
      "Skip this milestone and go to the next lesson",
    );
    html_text_set(skip_button, text);
  }
  let progress = property_get(r4, "progress");
  let success_container = property_get(r4, "success_container");
  let c = property_get(r4, "c");
  let r = {
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
  return r;
}
