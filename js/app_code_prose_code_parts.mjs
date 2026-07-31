import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_prose_code_parts(element, parts) {
  "render the [kind, text] parts of one explanation line into a given element - kind 'code' is a dark code token (a symbol or short expression), anything else is plain prose. Shared by the single-line and ordered-list builders so both read parts the same way.";
  function part_render(part) {
    "render one part into the element: a code token or plain prose";
    let kind = list_get(part, 0);
    let text = list_get(part, 1);
    let is_code = equal(kind, "code");
    let renderer = ternary(is_code, html_span_text_code_dark, html_span_text);
    renderer(element, text);
    return null;
  }
  list_map(parts, part_render);
  return element;
}
