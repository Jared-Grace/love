import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { list_get_wrap } from "../../../love/public/src/list_get_wrap.mjs";
export function html_cycle(parent, cycles, parts) {
  function lambda(part, index) {
    let item = list_get_wrap(cycles, index);
    let span = html_span_text(parent, part);
    item(span);
  }
  each_index(parts, lambda);
}
