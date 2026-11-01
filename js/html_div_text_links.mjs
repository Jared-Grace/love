import { html_div } from "./html_div.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { html_text_links } from "./html_text_links.mjs";
export function html_div_text_links(parent, text) {
  "One line of prose on its own line, with every web address in it a link.";
  "The whole line may break anywhere, not only the links in it. A long address is one unbroken run of characters, and a line that will not give it a break widens the box it sits in and gives the page a sideways scroll.";
  let div = html_div(parent);
  html_style_overflow_wrap(div, "anywhere");
  html_text_links(div, text);
  return div;
}
