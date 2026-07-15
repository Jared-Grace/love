import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_remaining } from "./app_code_lesson_name_id_remaining.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_name_id_symbol(left, rights, symbol) {
  let name_get = function app_code_lesson_name_id_symbol_name_get(
    lesson_name,
    left_upper,
  ) {
    let render = function app_code_lesson_name_id_symbol_render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      let r = list_first_remaining(rights);
      let first = property_get(r, "first");
      let remaining = property_get(r, "remaining");
      let first_upper = text_first_upper_to(first);
      html_span_text(parent, first_upper);
      html_span_space(parent);
      html_span_text_code_dark(parent, symbol);
      app_code_lesson_name_id_remaining(parent, remaining);
    };
    return render;
  };
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
