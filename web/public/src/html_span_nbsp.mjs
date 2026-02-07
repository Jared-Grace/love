import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_nbsp_replace } from "../../../love/public/src/html_nbsp_replace.mjs";
export function html_span_nbsp(parent) {
  let text = html_nbsp_replace(" ");
  let span = html_span_text(parent, text);
  return span;
}
