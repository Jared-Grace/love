import { html_clear_context } from "./html_clear_context.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_load } from "./app_code_review_load.mjs";
import { app_code_review_state_key } from "./app_code_review_state_key.mjs";
import { app_code_review_seed_to_exercise } from "./app_code_review_seed_to_exercise.mjs";
import { app_code_review_exercise } from "./app_code_review_exercise.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { add_1 } from "./add_1.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_replace_button_home_text } from "./app_replace_button_home_text.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
export function app_code_review(context) {
  let root = html_clear_context(context);
  let number = app_code_review_number_get(context);
  let loaded = app_code_review_load(context, number);
  let queue = property_get(loaded, "queue");
  let passed = property_get(loaded, "passed");
  let key = app_code_review_state_key();
  let g = app_code_container_padded_x(root);
  let progress = html_div(g);
  let c = app_code_container_light_blue(g);
  function persist() {
    let state = {
      number,
      passed,
      seeds: queue,
    };
    storage_local_set_context(context, key, state);
  }
  persist();
  function present() {
    html_clear(progress);
    html_clear(c);
    let done = list_empty_is(queue);
    if (done) {
      storage_local_remove_context(context, key);
      html_div_text(c, "You passed every quiz in this review — beautiful work");
      return;
    }
    let remaining = list_size(queue);
    let total = add(passed, remaining);
    html_progress_bar(progress, passed, total, "quiz");
    let seed = list_first(queue);
    let exercise = app_code_review_seed_to_exercise(seed);
    async function on_complete(clean) {
      let index_front = 0;
      list_remove_at(queue, index_front);
      if (clean) {
        passed = add_1(passed);
      } else {
        list_add(queue, seed);
      }
      persist();
      present();
    }
    app_code_review_exercise(c, exercise, on_complete);
  }
  present();
  let home_text = app_replace_button_home_text();
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  app_replace_button_wide(g, home_text, go_home);
}
