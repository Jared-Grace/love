import { html_span_text_nbsp_replace } from "./html_span_text_nbsp_replace.mjs";
export function html_span_nbsp(parent) {
  let span = html_span_text_nbsp_replace(parent, " ");
  return span;
}
