import { marker } from "../../../love/public/src/marker.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
export function html_pre_text(root, text) {
  marker("1");
  let p = html_p(root);
  html_text_set(p, text);
  return p;
}
