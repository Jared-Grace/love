import { html_clear_context } from "./html_clear_context.mjs";
import { app_learn_js_lesson_current } from "./app_learn_js_lesson_current.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_learn_js_lesson_title_strip } from "./app_learn_js_lesson_title_strip.mjs";
import { html_attached_is } from "./html_attached_is.mjs";
import { not } from "./not.mjs";
import { app_learn_js_page_complete_paint } from "./app_learn_js_page_complete_paint.mjs";
import { property_set } from "./property_set.mjs";
import { app_learn_js_batch_on_refill } from "./app_learn_js_batch_on_refill.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_item_get } from "./app_learn_js_batch_item_get.mjs";
import { list_single } from "./list_single.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_example_answer_gap } from "./app_learn_js_example_answer_gap.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { property_get } from "./property_get.mjs";
import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { app_learn_js_quiz_index_set } from "./app_learn_js_quiz_index_set.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_review_kind_step_is } from "./app_learn_js_review_kind_step_is.mjs";
import { app_learn_js_items_loop_runs_short } from "./app_learn_js_items_loop_runs_short.mjs";
import { list_iterator_refillable_on } from "./list_iterator_refillable_on.mjs";
import { app_learn_js_quiz_index_reset } from "./app_learn_js_quiz_index_reset.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_learn_js_examples } from "./app_learn_js_examples.mjs";
import { app_learn_js_go_back } from "./app_learn_js_go_back.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_learn_js_home } from "./app_learn_js_home.mjs";
import { app_learn_js_container_padded_x } from "./app_learn_js_container_padded_x.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_learn_js_quiz(context) {
  let root = html_clear_context(context);
  let lesson = app_learn_js_lesson_current(context);
  ("the bar is drawn inside a holder of its own, so it can be drawn again in the same place without redrawing the question under it");
  let holder = html_div(root);
  function render() {
    "the bar reads whether the lesson is finished every time it is drawn and dresses itself to match, so whatever changes that answer only has to draw it again - the shape the human gave, 2026-10-03. The first version compared finished before and after each answer and drew only on a change, which was a second place deciding what the bar already decides";
    html_clear(holder);
    app_learn_js_lesson_title_strip(holder, context, lesson);
  }
  render();
  function render_again() {
    "a holder no longer on the page belongs to a screen the learner has left, so it is not drawn into, and the page is not painted for it";
    let attached = html_attached_is(holder);
    if (not(attached)) {
      return;
    }
    render();
    app_learn_js_page_complete_paint(context);
  }
  property_set(context, "lesson_progress_render", render_again);
  let on_batch = app_learn_js_batch_on_refill(list_shuffle);
  ("the first question is drawn by the getter itself, as it is made, so it is not drawn again here - a second draw threw the first away and spent a question and a missing line the learner never saw");
  app_learn_js_batch_item_get(
    root,
    lesson,
    on_batch_item,
    on_batch,
    true,
    null,
  );
  function on_batch_item(container, bs, refresh_given, next_get) {
    let b = list_single(bs);
    let c = app_learn_js_container_light_blue(container);
    app_learn_js_example_answer_gap(c);
    html_div_text(c, "Please answer the following quiz question:");
    let qs = property_get(b, "quizzes");
    let quiz_index = storage_session_initialize_context(
      context,
      "quiz_index",
      0,
    );
    let count = list_size(qs);
    let in_range = less_than(quiz_index, count);
    if (not(in_range)) {
      quiz_index = 0;
      app_learn_js_quiz_index_set(context, quiz_index);
    }
    ("2026-11-24, at the human's asking: the step-by-step quiz draws from only the questions of its set whose loops run the fewest times, by the same rule as the guided example, since each press past the first few runs of a loop repeats the ones before; the other quizzes still draw from the whole set. Asked afresh every time the screen is drawn, so Next and Previous onto the step-by-step quiz draw short questions too. Not picked: a setting each lesson passes, which every lesson would have to remember");
    let exercises = property_get_or(b, "exercises", null);
    let steps = false;
    let b2 = equal(exercises, null);
    if (not(b2)) {
      let exercise = list_get(exercises, quiz_index);
      steps = app_learn_js_review_kind_step_is(exercise);
    }
    let next_drawn = next_get;
    if (steps) {
      let batch_whole = property_get(lesson, "batch");
      function batch_fewest() {
        let items = batch_whole();
        let kept = app_learn_js_items_loop_runs_short(items);
        return kept;
      }
      next_drawn = list_iterator_refillable_on(batch_fewest, on_batch);
      let b_short = next_drawn();
      let qs_short = property_get(b_short, "quizzes");
      qs = qs_short;
    }
    let q = list_get(qs, quiz_index);
    q(context, container, c, refresh_given, next_drawn);
  }
  async function lambda() {
    app_learn_js_quiz_index_reset(context);
    await app_shared_screen_set(context, app_learn_js_examples);
  }
  app_learn_js_go_back(root, [
    {
      emoji: emoji_arrow_left(),
      text: "Back to the examples",
      on_click: lambda,
    },
  ]);
  let text = app_shared_button_home_text();
  async function lambda2() {
    app_learn_js_quiz_index_reset(context);
    await app_shared_screen_set(context, app_learn_js_home);
  }
  let g = app_learn_js_container_padded_x(root);
  let b3 = app_shared_button_wide(g, text, lambda2);
  let value = app_shared_spaced_gap();
  html_style_margin_top(b3, value);
}
