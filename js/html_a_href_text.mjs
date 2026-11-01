import { html_a } from "./html_a.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { url_host_other_is } from "./url_host_other_is.mjs";
import { html_a_new_tab } from "./html_a_new_tab.mjs";
export function html_a_href_text(root, href, text) {
  "A link to follow; one that leaves this site opens in a new tab.";
  "Somebody halfway through reading a page did not ask to lose it, and a link out to another site is an aside rather than a destination, so the page they were on stays where it was and the aside opens beside it. A link within the site moves the reader along as usual. Decided here, where every link is made, so no link out can be written that forgets it.";
  let a = html_a(root);
  html_attribute_set(a, "href", href);
  html_text_set(a, text);
  let away = url_host_other_is(href);
  if (away) {
    html_a_new_tab(a);
  }
  return a;
}
