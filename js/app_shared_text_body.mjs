import { html_p_text } from "./html_p_text.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_shared_text_body(parent, text) {
  let p = html_p_text(parent, text);
  html_style_margin_y(p, "0.25em");
  return p;
}
