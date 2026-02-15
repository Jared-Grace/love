import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_text_left_centered(
  component,
  text_left,
  text_centered,
) {
  html_style_assign(component, {
    display: "flex",
    "align-items": "center",
  });
  let n = html_span_text(component, text_left);
  let title = html_span_text(component, text_centered);
  html_style_assign(title, {
    display: "flex",
    "flex-grow": "1",
    "text-align": "center",
    "flex-wrap": "wrap",
    "align-items": "center",
    "justify-content": "center",
  });
  let r = {
    title,
  };
  return r;
}
