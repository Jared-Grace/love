import { html_text_set } from "./html_text_set.mjs";
import { html_p } from "./html_p.mjs";
export function html_p_text(root, text) {
  let p = html_p(root);
  html_text_set(p, text);
  return p;
}
