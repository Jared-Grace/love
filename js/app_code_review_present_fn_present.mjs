import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_review_finish_show } from "./app_code_review_finish_show.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_review_seed_to_exercise } from "./app_code_review_seed_to_exercise.mjs";
import { app_code_review_show_success } from "./app_code_review_show_success.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { add_1 } from "./add_1.mjs";
import { not } from "./not.mjs";
import { app_code_review_seed_fresh } from "./app_code_review_seed_fresh.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_code_review_persist } from "./app_code_review_persist.mjs";
import { app_code_review_hide_success } from "./app_code_review_hide_success.mjs";
import { app_code_review_exercise } from "./app_code_review_exercise.mjs";
export function app_code_review_present_fn_present(
  r,
  {
    home_button,
    progress,
    c,
    queue,
    success_container,
    back_button,
    restart_button,
    has_next,
    skip_button,
    context,
    key,
    go_next,
  },
) {
  "The one call that draws the review as it stands, handed back so that answering an exercise can draw it again.";
  "WHAT THE LAST ANSWER LEADS TO IS DRAWN NEXT DOOR, because finishing a review has nothing to do with the queue this holds - it takes controls away, writes the finish down and offers the way on, and none of that is asking what to show next.";
  arguments_assert(arguments, 2);
  let passed = property_get(r, "passed");
  app_shared_button_gap_above(home_button);
  function present() {
    each([progress, c], html_clear);
    let done = list_empty_is(queue);
    if (done) {
      app_code_review_finish_show({
        success_container,
        back_button,
        restart_button,
        has_next,
        skip_button,
        context,
        key,
        c,
        go_next,
      });
      return;
    }
    let remaining = list_size(queue);
    let total = add(passed, remaining);
    html_progress_bar(progress, passed, total, "quiz");
    let seed = list_first(queue);
    let exercise = app_code_review_seed_to_exercise(seed);
    async function on_correct(clean) {
      app_code_review_show_success(success_container);
      await sleep_success_color();
      let index_front = 0;
      list_remove_at(queue, index_front);
      passed = add_1(passed);
      if (not(clean)) {
        ("two fresh copies go to the end rather than one, so answering it right once more is not enough to clear it. A single copy can be cleared by a guess - the choices narrow as wrong ones are dimmed, so the last pick left is right whether or not the learner knows why. Two consecutive copies cannot both be luck.");
        let lesson_id = property_get(seed, "lesson_id");
        let kind_index = property_get(seed, "kind_index");
        let requeued = app_code_review_seed_fresh(lesson_id, kind_index);
        let requeued_again = app_code_review_seed_fresh(lesson_id, kind_index);
        list_add_multiple(queue, [requeued, requeued_again]);
      }
      app_code_review_persist(context, key, passed, queue);
      present();
    }
    function on_incorrect() {
      app_code_review_hide_success(success_container);
    }
    app_code_review_exercise(c, exercise, on_correct, on_incorrect);
  }
  return present;
}
