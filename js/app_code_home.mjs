import { app_shared_button_numbered } from "./app_shared_button_numbered.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { app_code_review_range_label } from "./app_code_review_range_label.mjs";
import { app_code_review_button } from "./app_code_review_button.mjs";
import { add_1 } from "./add_1.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { each_index } from "./each_index.mjs";
export async function app_code_home(context) {
  "on returning home the lesson just left (its id is remembered in lesson_id) is scrolled to the vertical center, so the learner lands back where they were";
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  let div = html_div_text_centered(g, "Lessons:");
  html_style_margin_y(div, app_shared_spaced_gap());
  let lessons = app_code_lessons();
  let current_id = storage_local_get_context(context, "lesson_id");
  let just_left = null;
  function lambda(item, index) {
    let name = property_get(item, "name");
    let id = property_get(item, "id");
    async function lambda3() {
      storage_local_set_context(context, "lesson_id", id);
      await app_shared_screen_set(context, app_code_examples);
    }
    let r = app_shared_button_numbered(g, index, lambda3);
    let title = property_get(r, "title");
    name(title);
    let symbol = property_get_or_null(item, "symbol");
    let has_symbol = null_not_is(symbol);
    if (has_symbol) {
      html_span_space(title);
      html_span_text_code_dark(title, symbol);
    }
    let is_current = equal(id, current_id);
    if (is_current) {
      just_left = property_get(r, "button");
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
      storage_local_set_context(context, "review_number", lesson_number);
      await app_shared_screen_set(context, app_code_review);
    }
    app_code_review_button(g, label, on_click);
  }
  each_index(lessons, lambda);
  let found = null_not_is(just_left);
  if (found) {
    await html_scroll_center_now(just_left);
  }
}
