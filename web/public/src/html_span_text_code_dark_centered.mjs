import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
export function html_span_text_code_dark_centered(parent, text) {
  let d2 = html_span_text_code_dark(parent, text);
  html_style_assign(d2, {
    "align-self": "center",
  });
}
