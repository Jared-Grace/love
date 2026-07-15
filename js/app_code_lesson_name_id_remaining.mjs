import { each } from "./each.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_name_id_remaining(parent, remaining) {
  function each_remaining(rt) {
    let combined = text_combine(", ", rt);
    html_span_text(parent, combined);
  }
  each(remaining, each_remaining);
}
