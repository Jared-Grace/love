import { app_shared_button_wide_link_dress } from "./app_shared_button_wide_link_dress.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function app_shared_button_wide_link(parent, text, url) {
  "a wide button that is a real link: the same face and the same shape as the wide button beside it, built on an anchor, so it carries an address the browser itself can act on";
  "Its twin is a button holding a lambda, and a lambda is a thing only this page can run. A browser can offer to open a link in a new tab, or to copy where it goes, or to keep it for later, and it offers none of those for a button - so a card that leads somewhere is a link, and what it looks like is a separate question from what it IS.";
  "Opened in a new tab, which is what this is FOR. Whether that is the right way round for a reader is being found out on a phone; the two lines that ask for it are next to each other here so that either answer is a small change in one place.";
  let a = html_a_href_text(parent, url, text);
  html_attribute_set(a, "target", "_blank");
  ("the page being opened is told nothing about the page that opened it, which is what stops it reaching back into this one - and it is also what leaves the new tab a page in its own right rather than one this page is holding open");
  html_attribute_set(a, "rel", "noopener");
  app_shared_button_wide_link_dress(a);
  return a;
}
