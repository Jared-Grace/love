import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_shared_text_body(parent, text) {
  let p = html_p_text(parent, text);
  let value = app_shared_spaced_tiny_gap();
  html_style_margin_y(p, value);
  return p;
}
