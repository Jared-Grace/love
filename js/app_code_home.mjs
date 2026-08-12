import { app_code_home_just_left_center } from "./app_code_home_just_left_center.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { app_shared_button_numbered_progress } from "./app_shared_button_numbered_progress.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { app_code_review_range_label } from "./app_code_review_range_label.mjs";
import { app_code_review_button } from "./app_code_review_button.mjs";
import { add_1 } from "./add_1.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { each_index } from "./each_index.mjs";
export async function app_code_home(context) {
  "on returning home the lesson just left (its id is remembered in lesson_id) is scrolled to the vertical center, so the learner lands back where they were";
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  app_code_home_settings_gear(g, context);
  let div = html_div_text_centered(g, "Lessons:");
  let value = app_shared_spaced_gap();
  html_style_margin_y(div, value);
  let lessons = app_code_lessons();
  let current_id = storage_session_get_context(context, "lesson_id");
  let just_left = null;
  ("each row says whether that lesson is finished - every quiz in it answered right at least once - so a learner coming back can see where they got to instead of remembering it. The same row is what the replace app's list is made of, so the check, the pointing hand and the colours mean one thing across the apps");
  let progress = app_code_progress_read(context);
  let complete_previous = true;
  function lambda(item, index) {
    let id = property_get(item, "id");
    async function lambda3() {
      await app_shared_screen_go_tab(
        context,
        "lesson_id",
        id,
        app_code_examples,
      );
    }
    let complete = app_code_lesson_complete_is(progress, id);
    let r = app_shared_button_numbered_progress(
      g,
      complete,
      complete_previous,
      index,
      lambda3,
    );
    complete_previous = complete;
    let button = property_get(r, "button");
    let gap = app_shared_spaced_gap();
    html_style_margin_top(button, gap);
    let title = property_get(r, "title");
    app_code_lesson_title_render(title, item);
    let is_current = equal(id, current_id);
    if (is_current) {
      just_left = button;
    }
    let lesson_number = add_1(index);
    let scope = app_code_review_scope(lesson_number);
    let has_review = null_not_is(scope);
    if (has_review) {
      review_row(lesson_number, scope);
    }
  }
  function review_row(lesson_number, scope) {
    let label = app_code_review_range_label(lesson_number, scope);
    async function on_click() {
      await app_shared_screen_go_tab(
        context,
        "review_number",
        lesson_number,
        app_code_review,
      );
    }
    let review = app_code_review_button(g, label, on_click);
    let gap = app_shared_spaced_gap();
    html_style_margin_top(review, gap);
  }
  each_index(lessons, lambda);
  await app_code_home_just_left_center(just_left, context);
}
