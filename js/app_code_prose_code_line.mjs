import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_prose_code_line(parent, parts) {
  "one explanation line built from parts - each part is a two-item [kind, text] pair where kind 'code' renders a dark code token (a symbol or a short expression) and anything else renders plain prose. The shared building block for the comparison lessons' explanation lines.";
  let div = html_div(parent);
  function part_render(part) {
    "render one part into the line: a code token or plain prose";
    let kind = list_get(part, 0);
    let text = list_get(part, 1);
    let is_code = equal(kind, "code");
    let renderer = ternary(is_code, html_span_text_code_dark, html_span_text);
    renderer(div, text);
    return null;
  }
  list_map(parts, part_render);
  return div;
}
