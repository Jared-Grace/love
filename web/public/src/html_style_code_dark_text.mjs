import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
export function html_style_code_dark_text(span, text) {
  html_style_code_dark(span);
  html_text_set(span, text);
}
