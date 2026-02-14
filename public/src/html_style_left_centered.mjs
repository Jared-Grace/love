import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_left_centered(b, a, name) {
  html_style_assign(b, {
    display: "flex",
    "align-items": "center",
  });
  let n = html_span_text(b, a);
  let title = html_span_text(b, name);
  html_style_assign(title, {
    "flex-grow": "1",
    "text-align": "center",
  });
}
