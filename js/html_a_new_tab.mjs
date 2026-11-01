import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_a_new_tab(a) {
  "Makes a link open in a new tab, leaving the page it was clicked from still open behind it.";
  "It also tells the new tab nothing about the page that opened it, because a page opened this way can otherwise reach back and send the tab behind it somewhere else.";
  html_attribute_set(a, "target", "_blank");
  html_attribute_set(a, "rel", "noopener noreferrer");
}
