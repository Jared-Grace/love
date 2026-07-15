import { html_span_text } from "./html_span_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function html_span_text_deemphasized(parent, text) {
  let span = html_span_text(parent, text);
  app_shared_text_deemphasized(span);
  return span;
}
