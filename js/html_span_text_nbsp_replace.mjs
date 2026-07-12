import { html_style_set } from "./html_style_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_nbsp_replace } from "./html_nbsp_replace.mjs";
export function html_span_text_nbsp_replace(parent, text) {
  let replaced = html_nbsp_replace(text);
  let span = html_span_text(parent, replaced);
  html_style_set(span, "white-space", "nowrap");
  return span;
}
