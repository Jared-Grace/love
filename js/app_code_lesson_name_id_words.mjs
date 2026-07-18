import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_multiple } from "./html_span_text_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_lesson_name_id_words(left, rights) {
  "a home title that is just words (no code glyph): the category, then the rights as plain text, trimmed of the leading space they carried for the old console.log prefix; the first word after the category is capitalized so the title reads like a sentence";
  function name_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      let trimmed = list_map(rights, text_trim);
      let r = list_first_remaining(trimmed);
      let first = property_get(r, "first");
      let remaining = property_get(r, "remaining");
      let first_upper = text_first_upper_to(first);
      html_span_text(parent, first_upper);
      html_span_text_multiple(parent, remaining);
    }
    return render;
  }
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
