import { html_span_text_category } from "./html_span_text_category.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_name_id_category(parent, left_upper) {
  let category = text_combine(left_upper, ":");
  html_span_text_category(parent, category);
  html_span_space(parent);
}
