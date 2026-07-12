import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_link } from "./html_link.mjs";
export function html_stylesheet(href) {
  let l = html_link();
  html_attribute_set(l, "href", href);
  html_attribute_set(l, "rel", "stylesheet");
}
