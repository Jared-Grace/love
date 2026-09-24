import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_complete_record } from "./app_code_review_complete_record.mjs";
import { app_code_review_celebration } from "./app_code_review_celebration.mjs";
import { app_code_review_render_continue } from "./app_code_review_render_continue.mjs";
import { app_code_advance_or_no_more } from "./app_code_advance_or_no_more.mjs";
import { app_code_review_button_unfinished } from "./app_code_review_button_unfinished.mjs";
export function app_code_review_finish_show({
  success_container,
  back_button,
  has_next,
  skip_button,
  context,
  c,
  go_next,
}) {
  "What the learner sees the moment the last exercise of a review is answered: every control the review needed taken away, the finish written down, the celebration drawn, and the way on to the next lesson offered, with the next unfinished lesson beside it when that is a different one.";
  "THE FINISHED STATE IS KEPT, AND THE FACT THAT THE WHOLE THING WAS FINISHED IS WRITTEN DOWN BESIDE IT. Without the second half, finishing a review left no trace anywhere: the only sign of it was the screen the learner was about to walk away from, and the button they had just earned went back to looking exactly like one they had never pressed.";
  "THE SAVED REVIEW IS NOT DELETED HERE. The last answer already saved it with nothing left to answer, and loading resumes a saved review with nothing left as finished, so a refresh or a return from home shows this finished screen again instead of starting over at the first question. It used to be deleted here, which is what made a refresh start the review again.";
  "Rejected: marking the finish in the address instead. The address is forgotten when the learner comes back to the review from home, and a copied link would show the review as finished to someone who never did it.";
  "The restart button stays, because it is now the one way to do a finished review again. It deletes the saved review itself.";
  "The skip button is only taken away when there was a next lesson to skip to, because when there was not, it was never drawn.";
  arguments_assert(arguments, 1);
  each([success_container, back_button], html_remove);
  if (has_next) {
    html_remove(skip_button);
  }
  let number = app_code_review_number_get(context);
  app_code_review_complete_record(context, number);
  app_code_review_celebration(c);
  function render_continue(continue_parent) {
    let r = app_code_review_render_continue(continue_parent, go_next);
    return r;
  }
  app_code_advance_or_no_more(c, has_next, render_continue);
  ("the next unfinished lesson is offered beside the way on, where it is somewhere else than the lesson straight after this review");
  app_code_review_button_unfinished(context, c, number);
}
