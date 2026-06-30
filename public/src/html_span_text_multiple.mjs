import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function html_span_text_multiple(parent, digits) {
  function lambda4(d) {
    let span = html_span_text(parent, d);
    return span;
  }
  let mapped3 = list_map(digits, lambda4);
  return mapped3;
}
