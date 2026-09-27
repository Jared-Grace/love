import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { app_code_review_cursor_key } from "./app_code_review_cursor_key.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { null_is } from "./null_is.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_review_quiz_jump_choose } from "./app_code_review_quiz_jump_choose.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { subtract } from "./subtract.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_review_finish_show } from "./app_code_review_finish_show.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_review_seed_to_exercise } from "./app_code_review_seed_to_exercise.mjs";
import { app_code_review_show_success } from "./app_code_review_show_success.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
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
  "THE LEARNER WORKS AT A PLACE IN THE QUEUE, cursor, not always at its front, so that jumping to a quiz leaves every quiz where it was: the one jumped to keeps its number, the bar moves to it, and answering it goes on to the one after. Past the end the place goes back to the front, to whatever was jumped over. Picked over sending the jumped-over quizzes to the end, which the human found did nothing they could see, 2026-09-27: the jumped-to quiz became quiz 1 and the bar stayed put.";
  arguments_assert(arguments, 2);
  let passed = property_get(r, "passed");
  app_shared_button_gap_above(home_button);
  let cursor_key = app_code_review_cursor_key(key);
  let cursor = storage_local_get_context(context, cursor_key);
  if (null_is(cursor)) {
    cursor = 0;
  }
  function cursor_persist() {
    storage_local_set_context(context, cursor_key, cursor);
  }
  function progress_draw(position, total) {
    "the bar, which opens the chooser when tapped; Cancel draws the bar again and leaves the quiz below as it was, half-built answer and all";
    html_clear(progress);
    let bar = html_progress_bar(progress, position, total, "quiz");
    let container = property_get(bar, "container");
    function cancel() {
      progress_draw(position, total);
    }
    function choose() {
      html_clear(progress);
      let current = add_1(position);
      app_code_review_quiz_jump_choose(
        progress,
        passed,
        current,
        total,
        jump,
        cancel,
      );
    }
    html_on_click(container, choose);
  }
  function jump(number) {
    "number counts from 1 over the answered quizzes and then the queue, so its place in the queue is what is left after both";
    let right = add_1(passed);
    cursor = subtract(number, right);
    cursor_persist();
    present();
  }
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
    if (greater_than_equal(cursor, remaining)) {
      cursor = 0;
      cursor_persist();
    }
    let total = add(passed, remaining);
    let position = add(passed, cursor);
    progress_draw(position, total);
    let seed = list_get(queue, cursor);
    let exercise = app_code_review_seed_to_exercise(seed);
    async function on_correct(clean) {
      app_code_review_show_success(success_container);
      await sleep_success_color();
      list_remove_at(queue, cursor);
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
