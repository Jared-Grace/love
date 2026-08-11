import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { html_span_text_multiple } from "./html_span_text_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_name_id_function(left, rights) {
  let name_get = function app_code_lesson_name_id_function_name_get(parent) {
    let r = list_first_remaining(rights);
    let remaining = property_get(r, "remaining");
    let first = property_get(r, "first");
    html_span_text_code_dark(parent, first);
    html_span_text_multiple(parent, remaining);
  };
  let name_id = app_code_lesson_name_id_category_then(rights, left, name_get);
  return name_id;
}
