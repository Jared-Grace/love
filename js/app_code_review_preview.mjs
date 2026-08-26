import { app_code_review_preview_fns } from "./app_code_review_preview_fns.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_buttons_cap_style } from "./app_code_buttons_cap_style.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_review_containers } from "./app_code_review_containers.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_items_by_id } from "./app_code_review_items_by_id.mjs";
import { app_code_review_seed_from_items } from "./app_code_review_seed_from_items.mjs";
import { app_code_review_seed_to_exercise } from "./app_code_review_seed_to_exercise.mjs";
import { app_code_review_show_success } from "./app_code_review_show_success.mjs";
import { app_code_review_hide_success } from "./app_code_review_hide_success.mjs";
import { app_code_review_exercise } from "./app_code_review_exercise.mjs";
export function app_code_review_preview() {
  arguments_assert(arguments, 0);
  ("One review question, on the sandbox app at hash code_review: pick a lesson, pick one of its question kinds, and that question is drawn - the real one, out of the review's own parts.");
  ("It exists because the review screen only hands out its questions in a queue of ten in a shuffled order, so reaching the one question worth looking at meant answering the ones in front of it, and reaching it a second time meant doing that again. Nothing about that queue is what is being looked at, so all of it is cost. Here the same question is two taps away and a third tap asks it again.");
  ("Nothing here draws a question. The lesson list, the batch a lesson holds, the seed made from it, the exercise made from the seed and the drawing of that exercise are every one of them the review's own functions, called in the review's own order, inside the review's own frame. That is the whole point: a screen that redrew any of it would answer for a screen nobody uses. What is left out is only what the queue needs - the progress bar's numbers, the persisting, the requeueing of a question got wrong - and none of those touch the question itself.");
  ("The success message is shown and hidden exactly as the review shows and hides it, because when it arrives and what it does to the answer already on the screen is one of the things this page is here to be looked at for.");
  ("The kind buttons stay on the screen under the question rather than being cleared away with the picker. Asking the same kind again is then the same tap that asked it the first time, and a fresh line comes up each time because the batch is generated again on every ask.");
  app_code_buttons_cap_style();
  let root = html_body_div();
  let picker = html_div(root);
  let stage = html_div(root);
  function question_show(lesson_id, kind_index) {
    "draw one real review question for this lesson and this kind, in the review's own frame and answering the way the review answers";
    html_clear(stage);
    let frame = app_code_review_containers(stage);
    let success_container = property_get(frame, "success_container");
    let c = property_get(frame, "c");
    let items = app_code_review_items_by_id(lesson_id);
    let seed = app_code_review_seed_from_items(lesson_id, kind_index, items);
    let exercise = app_code_review_seed_to_exercise(seed);
    function on_correct(clean) {
      "answered right - whether it was answered right first time is what the review counts, and there is nothing here counting, so all that is left is the well done";
      app_code_review_show_success(success_container);
    }
    function on_incorrect() {
      app_code_review_hide_success(success_container);
    }
    app_code_review_exercise(c, exercise, on_correct, on_incorrect);
  }
  let shortlist_show = app_code_review_preview_fns(
    picker,
    stage,
    question_show,
  );
  shortlist_show();
}
