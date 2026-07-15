import { html_span_text } from "./html_span_text.mjs";
import { app_shared_text_category } from "./app_shared_text_category.mjs";
export function html_span_text_category(parent, text) {
  let span = html_span_text(parent, text);
  app_shared_text_category(span);
  return span;
}
