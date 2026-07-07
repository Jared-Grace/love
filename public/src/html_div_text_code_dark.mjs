import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
export function html_div_text_code_dark(parent, text) {
  let div = html_div(parent);
  html_text_set_code_dark(div, text);
  return div;
}
