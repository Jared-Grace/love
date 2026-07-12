import { html_div } from "./html_div.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
export function html_div_text_code_dark(parent, text) {
  let div = html_div(parent);
  html_text_set_code_dark(div, text);
  return div;
}
