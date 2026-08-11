import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_name_id_remaining } from "./app_code_lesson_name_id_remaining.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_name_id(left, rights) {
  let paint = function app_code_lesson_name_id_paint(parent) {
    let r = list_first_remaining(rights);
    let first = property_get(r, "first");
    let remaining = property_get(r, "remaining");
    let first_upper = text_first_upper_to(first);
    html_span_text(parent, first_upper);
    app_code_lesson_name_id_remaining(parent, remaining);
  };
  let name_id = app_code_lesson_name_id_category_then(rights, left, paint);
  return name_id;
}
