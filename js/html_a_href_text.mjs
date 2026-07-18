import { html_a } from "./html_a.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_a_href_text(root, href, text) {
  let a = html_a(root);
  html_attribute_set(a, "href", href);
  html_text_set(a, text);
  return a;
}
