import { html_clear_context } from "./html_clear_context.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_slice } from "./list_slice.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_review_exercises_gather } from "./app_code_review_exercises_gather.mjs";
import { app_code_review_exercise } from "./app_code_review_exercise.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_add } from "./list_add.mjs";
import { add_1 } from "./add_1.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_replace_button_home_text } from "./app_replace_button_home_text.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_review(context) {
  let root = html_clear_context(context);
  let number = app_code_review_number_get(context);
  let scope = app_code_review_scope(number);
  let lessons = app_code_lessons();
  let start = subtract(number, scope);
  let covered = list_slice(lessons, start, number);
  let queue = app_code_review_exercises_gather(covered);
  let total = list_size(queue);
  let passed = 0;
  let g = app_code_container_padded_x(root);
  let progress = html_div(g);
  let c = app_code_container_light_blue(g);
  function progress_render() {
    html_clear(progress);
    let passed_text = text_to(passed);
    let total_text = text_to(total);
    let text = text_combine_multiple([
      passed_text,
      " of ",
      total_text,
      " passed",
    ]);
    html_div_text(progress, text);
  }
  function present() {
    progress_render();
    html_clear(c);
    let done = list_empty_is(queue);
    if (done) {
      html_div_text(c, "You passed every quiz in this review — beautiful work");
      return;
    }
    let current = list_first(queue);
    async function on_complete(clean) {
      let index_front = 0;
      list_remove_at(queue, index_front);
      if (clean) {
        passed = add_1(passed);
      } else {
        list_add(queue, current);
      }
      present();
    }
    app_code_review_exercise(c, current, on_complete);
  }
  present();
  let home_text = app_replace_button_home_text();
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  app_replace_button_wide(g, home_text, go_home);
}
