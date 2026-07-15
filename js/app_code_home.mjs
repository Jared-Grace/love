import { app_replace_button_wide_text_left_centered } from "./app_replace_button_wide_text_left_centered.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { app_code_review_range_label } from "./app_code_review_range_label.mjs";
import { add_1 } from "./add_1.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_number_gutter } from "./app_shared_number_gutter.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  let div = html_div_text_centered(g, "Lessons:");
  html_style_margin_y(div, app_shared_spaced_gap());
  let lessons = app_code_lessons();
  function lambda(item, index) {
    let name = property_get(item, "name");
    let id = property_get(item, "id");
    async function lambda3() {
      storage_local_set_context(context, "lesson_id", id);
      await app_shared_screen_set(context, app_code_examples);
    }
    let text = add_1_period(index);
    let r = app_replace_button_wide_text_left_centered(g, lambda3, text, "");
    let button = property_get(r, "button");
    let columns = text_combine(app_shared_number_gutter(), " 1fr");
    html_style_set(button, "grid-template-columns", columns);
    let number = property_get(r, "left");
    html_style_set(number, "justify-self", "end");
    app_shared_text_deemphasized(number);
    let title = property_get(r, "title");
    name(title);
    let symbol = property_get_or_null(item, "symbol");
    let has_symbol = null_not_is(symbol);
    if (has_symbol) {
      html_span_space(title);
      html_span_text_code_dark(title, symbol);
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
    let r = app_replace_button_wide_text_left_centered(g, on_click, label, "Review");
    let number = property_get(r, "left");
    app_shared_text_deemphasized(number);
  }
  each_index(lessons, lambda);
}
