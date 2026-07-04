import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { text_pad_space } from "../../../love/public/src/text_pad_space.mjs";
export function html_span_text_padded_space(parent, text) {
  let padded = text_pad_space(s);
  let span = html_span_text(parent, text);
  return span;
}
