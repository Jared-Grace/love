import { html_pre } from "./html_pre.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function html_pre_text(root, text) {
  let pre = html_pre(root);
  html_text_set(pre, text);
  return pre;
}
