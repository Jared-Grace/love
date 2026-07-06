import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_display_inline } from "../../../love/public/src/html_display_inline.mjs";
export function html_style_code_dark_nowrap(span) {
  html_display_inline(span);
  html_style_assign(span, {
    "white-space": "nowrap",
  });
  html_style_code_dark(span);
}
