import { html_style_set } from "./html_style_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_style_text_left_centered(
  component,
  text_left,
  text_centered,
) {
  html_style_assign(component, {
    display: "grid",
    "grid-template-columns": "auto 1fr",
    "align-items": "center",
  });
  let left = html_span_text(component, text_left);
  html_style_set(left, "justify-self", "start");
  let title = html_span_text(component, text_centered);
  html_style_set(title, "justify-self", "center");
  let r = {
    title,
  };
  return r;
}
