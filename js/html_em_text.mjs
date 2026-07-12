import { html_text_set } from "./html_text_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_em_text(container, text) {
  let span = html_element(container, "em");
  html_text_set(span, text);
}
