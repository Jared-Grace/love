import { list_map } from "./list_map.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_multiple(parent, list) {
  function lambda(t) {
    let span = html_span_text(parent, t);
    return span;
  }
  let spans = list_map(list, lambda);
  return spans;
}
