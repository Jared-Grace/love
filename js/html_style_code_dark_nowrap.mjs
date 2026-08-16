import { html_style_code_nowrap_generic } from "./html_style_code_nowrap_generic.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
export function html_style_code_dark_nowrap(span) {
  "this is likely interweaving text and code, so code should not wrap";
  html_style_code_nowrap_generic(span, html_style_code_dark);
}
