import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_name_id_remaining } from "./app_code_lesson_name_id_remaining.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_name_id_symbol(left, rights, symbol) {
  let paint = function app_code_lesson_name_id_symbol_paint(parent) {
    let r = list_first_remaining(rights);
    let first = property_get(r, "first");
    let remaining = property_get(r, "remaining");
    let first_upper = text_first_upper_to(first);
    html_span_text(parent, first_upper);
    html_span_space(parent);
    html_span_text_code_dark(parent, symbol);
    app_code_lesson_name_id_remaining(parent, remaining);
  };
  let name_id = app_code_lesson_name_id_category_then(rights, left, paint);
  return name_id;
}
