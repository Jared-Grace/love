import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_title_render(parent, lesson) {
  "render a lesson's home title (Category: Name, plus its operator symbol chip when the lesson carries a separate symbol) into parent - the single source of truth for how a lesson names itself, shared by the home list button and the in-lesson title strip";
  let name = property_get(lesson, "name");
  name(parent);
  let symbol = property_get_or_null(lesson, "symbol");
  let has_symbol = null_not_is(symbol);
  if (has_symbol) {
    html_span_space(parent);
    html_span_text_code_dark(parent, symbol);
  }
}
