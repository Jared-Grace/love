import { html_text_set } from "./html_text_set.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_text(parent, text) {
  let div = html_div(parent);
  html_text_set(div, text);
  return div;
}
