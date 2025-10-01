import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_div_text(root, text) {
  marker("1");
  let div = html_div(root);
  html_text_set(div, text);
  return div;
}
