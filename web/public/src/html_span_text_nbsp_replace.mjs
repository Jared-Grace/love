import { html_nbsp_replace } from "../../../love/public/src/html_nbsp_replace.mjs";
export function html_span_text_nbsp_replace(parent, word) {
  let replaced = html_nbsp_replace(word);
  let span = html_span_text_nbsp_replace(replaced, parent);
  return span;
}
