import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_display_inline } from "./html_display_inline.mjs";
export function html_style_code_dark_nowrap(span) {
  html_display_inline(span);
  html_style_set(span, "white-space", "nowrap");
  html_style_code_dark(span);
}
