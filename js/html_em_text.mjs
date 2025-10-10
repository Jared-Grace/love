import { marker } from "../../../love/public/src/marker.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_em_text(container, text) {
  marker("1");
  let span = html_element(container, "em");
  html_text_set(span, text);
}
