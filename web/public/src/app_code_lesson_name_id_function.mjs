import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_span_text_multiple } from "../../../love/public/src/html_span_text_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
import { text_combine_space_right } from "../../../love/public/src/text_combine_space_right.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { app_code_lesson_name_id_generic } from "../../../love/public/src/app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_name_id_function(left, rights) {
  let name_get = function lambda2(lesson_name) {
    let r2 = function lambda(parent) {
      let combined = text_combine_space_right(left);
      let span = html_span_text(parent, combined);
      let r = list_first_remaining(rights);
      let remaining = property_get(r, "remaining");
      let first = property_get(r, "first");
      html_span_text_code_dark(parent, first);
      let mapped = list_map(remaining, html_span_text);
      let spans = html_span_text_multiple(parent, mapped);
    };
    return r2;
  };
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
