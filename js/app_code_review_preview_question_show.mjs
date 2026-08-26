import { app_code_review_seed_fresh } from "./app_code_review_seed_fresh.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_review_containers } from "./app_code_review_containers.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_seed_to_exercise } from "./app_code_review_seed_to_exercise.mjs";
import { app_code_review_show_success } from "./app_code_review_show_success.mjs";
import { app_code_review_hide_success } from "./app_code_review_hide_success.mjs";
import { app_code_review_exercise } from "./app_code_review_exercise.mjs";
export function app_code_review_preview_question_show(stage) {
  arguments_assert(arguments, 1);
  function question_show(lesson_id, kind_index) {
    "draw one real review question for this lesson and this kind, in the review's own frame and answering the way the review answers";
    html_clear(stage);
    let frame = app_code_review_containers(stage);
    let success_container = property_get(frame, "success_container");
    let c = property_get(frame, "c");
    let seed = app_code_review_seed_fresh(lesson_id, kind_index);
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
  return question_show;
}
