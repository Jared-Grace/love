import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { html_bar_content_padding } from "../../../love/public/src/html_bar_content_padding.mjs";
export function html_bar_content_padded(root) {
  let bc = html_bar_content(root);
  let content = property_get(bc, "content");
  html_bar_content_padding(content);
  return bc;
}
