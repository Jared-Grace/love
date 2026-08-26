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
import { app_shared_button } from "./app_shared_button.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { each_index } from "./each_index.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { each } from "./each.mjs";
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
  function kinds_show(lesson_id) {
    "the question kinds this lesson holds, one button each, named by the very words the question is asked over";
    each([picker, stage], html_clear);
    app_shared_button(picker, "← all lessons", lessons_show);
    html_p_text(picker, lesson_id);
    let items = app_code_review_items_by_id(lesson_id);
    let kinds = list_first_property(items, "exercises");
    function each_kind(kind, kind_index) {
      let info = property_get(kind, "info");
      let question_label = property_get(info, "question_label");
      function kind_chosen() {
        question_show(lesson_id, kind_index);
      }
      app_shared_button(picker, question_label, kind_chosen);
    }
    each_index(kinds, each_kind);
  }
  function lessons_show() {
    "every lesson the page is showing, named by its id - the id and not the painted home title, because the id is a plain word that can be read down a long list and typed into a search, and a hundred painted titles is a hundred running animations";
    each([picker, stage], html_clear);
    let asked =
      "Pick a lesson, then a question kind. One real review question is drawn, and picking the same kind again asks it again on a fresh line.";
    html_p_text(picker, asked);
    let lessons = app_code_lessons();
    function each_lesson(lesson) {
      let lesson_id = property_get(lesson, "id");
      function lesson_chosen() {
        kinds_show(lesson_id);
      }
      app_shared_button(picker, lesson_id, lesson_chosen);
    }
    each(lessons, each_lesson);
  }
  lessons_show();
}
