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
import { app_code_review_complete } from "./app_code_review_complete.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_replace_button_home_text } from "./app_replace_button_home_text.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { app_replace_success_message } from "./app_replace_success_message.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { html_remove } from "./html_remove.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_review(context) {
  let root = html_clear_context(context);
  let number = app_code_review_number_get(context);
  let loaded = app_code_review_load(context, number);
  let queue = property_get(loaded, "queue");
  let passed = property_get(loaded, "passed");
  let key = app_code_review_state_key();
  let g = app_code_container_padded_x(root);
  let progress = html_div(g);
  let success_container = html_div(g);
  let c = app_code_container_light_blue(g);
  function show_success() {
    html_clear(success_container);
    app_replace_success_message(success_container);
    html_visibility_visible(success_container);
  }
  function hide_success() {
    html_visibility_hidden(success_container);
  }
  app_replace_success_message(success_container);
  hide_success();
  let lessons = app_code_lessons();
  let lessons_count = list_size(lessons);
  async function go_to_lesson(lesson) {
    let id = property_get(lesson, "id");
    storage_local_set_context(context, "lesson_id", id);
    await app_shared_screen_set(context, app_code_examples);
  }
  let previous_index = subtract(number, 1);
  let previous_lesson = list_get(lessons, previous_index);
  async function go_previous() {
    await go_to_lesson(previous_lesson);
  }
  let next_index = number;
  let has_next = less_than(next_index, lessons_count);
  let next_lesson = null;
  if (has_next) {
    next_lesson = list_get(lessons, next_index);
  }
  async function go_next() {
    await go_to_lesson(next_lesson);
  }
  function persist() {
    let state = {
      number,
      passed,
      seeds: queue,
    };
    storage_local_set_context(context, key, state);
  }
  persist();
  let back = app_shared_button_back_text();
  let back_text = text_combine(back, " to the previous lesson");
  let back_button = app_replace_button_wide(g, back_text, go_previous);
  let skip_button = null;
  if (has_next) {
    let arrow = emoji_arrow_right();
    let next_text = text_combine(
      "Skip this review and go to the next lesson ",
      arrow,
    );
    skip_button = app_replace_button_wide(g, next_text, go_next);
  }
  let home_text = app_replace_button_home_text();
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  app_replace_button_wide(g, home_text, go_home);
  function present() {
    html_clear(progress);
    html_clear(c);
    let done = list_empty_is(queue);
    if (done) {
      html_remove(success_container);
      html_remove(back_button);
      if (has_next) {
        html_remove(skip_button);
      }
      storage_local_remove_context(context, key);
      app_code_review_complete(c);
      if (has_next) {
        let arrow = emoji_arrow_right();
        let continue_text = text_combine("Continue to the next lesson ", arrow);
        app_replace_button_wide(c, continue_text, go_next);
      }
      return;
    }
    let remaining = list_size(queue);
    let total = add(passed, remaining);
    html_progress_bar(progress, passed, total, "quiz");
    let seed = list_first(queue);
    let exercise = app_code_review_seed_to_exercise(seed);
    async function on_correct(clean) {
      show_success();
      await sleep_success_color();
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
    function on_incorrect() {
      hide_success();
    }
    app_code_review_exercise(c, exercise, on_correct, on_incorrect);
  }
  present();
}
