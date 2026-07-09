import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_text_left_centered(
  component,
  text_left,
  text_centered,
) {
  html_style_assign(component, {
    display: "grid",
    "grid-template-columns": "auto 1fr auto",
    "align-items": "center",
  });
  let left = html_span_text(component, text_left);
  html_style_assign(left, {
    "justify-self": "start",
  });
  let title = html_span_text(component, text_centered);
  html_style_assign(title, {
    "flex-grow": "1",
    "text-align": "center",
  });
  let r = {
    title,
  };
  return r;
}
