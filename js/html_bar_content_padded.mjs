import { property_get } from "./property_get.mjs";
import { html_bar_content } from "./html_bar_content.mjs";
import { html_bar_content_padding } from "./html_bar_content_padding.mjs";
export function html_bar_content_padded(root) {
  let bc = html_bar_content(root);
  let content = property_get(bc, "content");
  html_bar_content_padding(content);
  return bc;
}
