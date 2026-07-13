import { html_div_text } from "./html_div_text.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
export function html_div_text_bold(parent, text) {
  let div = html_div_text(parent, text);
  html_bold_mild(div);
  return div;
}
