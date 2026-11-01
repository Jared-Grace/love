import { html_div } from "./html_div.mjs";
import { html_text_links } from "./html_text_links.mjs";
export function html_div_text_links(parent, text) {
  "One line of prose on its own line, with every web address in it a link.";
  let div = html_div(parent);
  html_text_links(div, text);
  return div;
}
