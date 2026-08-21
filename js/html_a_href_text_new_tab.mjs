import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_a_href_text_new_tab(root, href, text) {
  "A link that opens somewhere else in a new tab, leaving the page it was clicked from still open behind it.";
  "It is for a link that leaves this site. Somebody halfway through reading a page did not ask to lose it, and a link out to another site is an aside rather than a destination, so the page they were on stays where it was and the aside opens beside it.";
  "It also tells the new tab nothing about the page that opened it, because a page opened this way can otherwise reach back and send the tab behind it somewhere else.";
  arguments_assert(arguments, 3);
  let a = html_a_href_text(root, href, text);
  html_attribute_set(a, "target", "_blank");
  html_attribute_set(a, "rel", "noopener noreferrer");
  return a;
}
