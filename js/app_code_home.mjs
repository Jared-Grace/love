import { app_replace_button_wide_text_left_centered } from "./app_replace_button_wide_text_left_centered.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let g = app_code_container_padded_x(root);
  let div = html_div_text(g, "Lessons:");
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
    let title = property_get(r, "title");
    name(title);
    let symbol = property_get_or_null(item, "symbol");
    let has_symbol = null_not_is(symbol);
    if (has_symbol) {
      html_span_space(title);
      html_span_text(title, "(");
      html_span_text_code_dark(title, symbol);
      html_span_text(title, ")");
    }
  }
  each_index(lessons, lambda);
}
