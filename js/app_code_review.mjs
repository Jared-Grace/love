import { app_code_review_progress } from "./app_code_review_progress.mjs";
import { app_code_review_g } from "./app_code_review_g.mjs";
import { app_code_review_key } from "./app_code_review_key.mjs";
import { app_code_review_passed } from "./app_code_review_passed.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { app_code_review_render_continue } from "./app_code_review_render_continue.mjs";
import { app_code_review_hide_success } from "./app_code_review_hide_success.mjs";
import { app_code_review_persist } from "./app_code_review_persist.mjs";
import { app_code_review_show_success } from "./app_code_review_show_success.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_code_review_seed_to_exercise } from "./app_code_review_seed_to_exercise.mjs";
import { app_code_review_seed_fresh } from "./app_code_review_seed_fresh.mjs";
import { app_code_review_exercise } from "./app_code_review_exercise.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { add } from "./add.mjs";
import { add_1 } from "./add_1.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_review_complete } from "./app_code_review_complete.mjs";
import { app_code_advance_or_no_more } from "./app_code_advance_or_no_more.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { not } from "./not.mjs";
import { html_remove } from "./html_remove.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
export function app_code_review(context) {
  let root = html_clear_context(context);
  let r2 = app_code_review_passed(context, root);
  let r4 = app_code_review_key(r2);
  let r5 = app_code_review_g(r4);
  let g = property_get(r5, "g");
  let r3 = app_code_review_progress(r5);
  let progress = property_get(r3, "progress");
  let key = property_get(r3, "key");
  let c = property_get(r3, "c");
  let success_container = property_get(r3, "success_container");
  let restart_text = property_get(r3, "restart_text");
  let back_button = property_get(r3, "back_button");
  let has_next = property_get(r3, "has_next");
  let go_restart = property_get(r3, "go_restart");
  let skip_button = property_get(r3, "skip_button");
  let go_next = property_get(r3, "go_next");
  let queue = property_get(r3, "queue");
  let passed = property_get(r3, "passed");
  let restart_button = app_shared_button_wide(g, restart_text, go_restart);
  app_shared_button_gap_above(restart_button);
  let home_text = app_shared_button_home_text();
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  let home_button = app_shared_button_wide(g, home_text, go_home);
  app_shared_button_gap_above(home_button);
  function present() {
    html_clear(progress);
    html_clear(c);
    let done = list_empty_is(queue);
    if (done) {
      html_remove(success_container);
      html_remove(back_button);
      html_remove(restart_button);
      if (has_next) {
        html_remove(skip_button);
      }
      storage_local_remove_context(context, key);
      app_code_review_complete(c);
      function render_continue(continue_parent) {
        let r = app_code_review_render_continue(continue_parent, go_next);
        return r;
      }
      app_code_advance_or_no_more(c, has_next, render_continue);
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
  present();
}
