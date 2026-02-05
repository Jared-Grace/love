import { html_pre } from "../../../love/public/src/html_pre.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
export function html_pre_text(root, text) {
  let pre = html_pre(root);
  html_text_set(pre, text);
  return pre;
}
