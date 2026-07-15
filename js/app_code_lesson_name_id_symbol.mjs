import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { each } from "./each.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_name_id_symbol(left, rights, symbol) {
  let name_get = function app_code_lesson_name_id_symbol_name_get(
    lesson_name,
    left_upper,
  ) {
    let render = function app_code_lesson_name_id_symbol_render(parent) {
      let category = text_combine(left_upper, ":");
      html_span_text_deemphasized(parent, category);
      html_span_space(parent);
      let r = list_first_remaining(rights);
      let first = property_get(r, "first");
      let remaining = property_get(r, "remaining");
      html_span_text(parent, first);
      html_span_space(parent);
      html_span_text_code_dark(parent, symbol);
      function each_remaining(rt) {
        let combined = text_combine(", ", rt);
        html_span_text(parent, combined);
      }
      each(remaining, each_remaining);
    };
    return render;
  };
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
