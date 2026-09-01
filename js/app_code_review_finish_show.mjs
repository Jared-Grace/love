import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_remove } from "./html_remove.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_complete_record } from "./app_code_review_complete_record.mjs";
import { app_code_review_celebration } from "./app_code_review_celebration.mjs";
import { app_code_review_render_continue } from "./app_code_review_render_continue.mjs";
import { app_code_advance_or_no_more } from "./app_code_advance_or_no_more.mjs";
export function app_code_review_finish_show({
  success_container,
  back_button,
  restart_button,
  has_next,
  skip_button,
  context,
  key,
  c,
  go_next,
}) {
  "What the learner sees the moment the last exercise of a review is answered: every control the review needed taken away, the finish written down, the celebration drawn, and the way on to the next lesson offered.";
  "THE HALF-ANSWERED STATE IS THROWN AWAY AND THE FACT THAT THE WHOLE THING WAS FINISHED IS WRITTEN DOWN IN ITS PLACE. Without the second half, finishing a review left no trace anywhere: the only sign of it was the screen the learner was about to walk away from, and the button they had just earned went back to looking exactly like one they had never pressed.";
  "The skip button is only taken away when there was a next lesson to skip to, because when there was not, it was never drawn.";
  arguments_assert(arguments, 1);
  each([success_container, back_button, restart_button], html_remove);
  if (has_next) {
    html_remove(skip_button);
  }
  storage_local_remove_context(context, key);
  let number = app_code_review_number_get(context);
  app_code_review_complete_record(context, number);
  app_code_review_celebration(c);
  function render_continue(continue_parent) {
    let r = app_code_review_render_continue(continue_parent, go_next);
    return r;
  }
  app_code_advance_or_no_more(c, has_next, render_continue);
}
