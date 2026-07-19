import { html_span } from "./html_span.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
// Inline code inside note prose (an alias or fn name) — monospace with a subtle
// background, lighter than the prominent function/command chips.
export function example_note_code_dom(parent, text) {
  let code = html_span(parent);
  html_text_content_set(code, text);
  html_style_set(code, "font-family", "ui-monospace, monospace");
  html_style_background_color_set(code, "#e8e8e8");
  html_style_set(code, "border-radius", app_shared_border_radius());
  html_style_set(code, "padding", "0.05rem 0.3rem");
  html_style_set(code, "font-size", "0.9em");
  return code;
}
