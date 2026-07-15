import { html_span_text_multiple } from "./html_span_text_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_name_id_function(left, rights) {
  let name_get = function app_code_lesson_name_id_function_name_get(
    lesson_name,
    left_upper,
  ) {
    let r2 = function app_code_lesson_name_id_function_inner(parent) {
      let category = text_combine(left_upper, ":");
      html_span_text_deemphasized(parent, category);
      html_span_space(parent);
      let r = list_first_remaining(rights);
      let remaining = property_get(r, "remaining");
      let first = property_get(r, "first");
      html_span_text_code_dark(parent, first);
      let spans = html_span_text_multiple(parent, remaining);
    };
    return r2;
  };
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
