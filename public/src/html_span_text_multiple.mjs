import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function html_span_text_multiple(parent, list) {
  function lambda(d) {
    let span = html_span_text(parent, thisd);
    return span;
  }
  let spans = list_map(list, lambda);
  return spans;
}
