import { html_nbsp_replace } from "../../../love/public/src/html_nbsp_replace.mjs";
export function html_span_text_nbsp_replace(word, div3) {
  let replaced = html_nbsp_replace(word);
  let span = html_span_text_nbsp_replace(div3, replaced);
  return span;
}
