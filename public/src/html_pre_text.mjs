import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
export function html_pre_text(root, text) {
  marker("1");
  let p = html_element(root, "pre");
  html_text_set(p, text);
  return p;
}
