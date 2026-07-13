import { property_get } from "./property_get.mjs";
import { html_bar_content } from "./html_bar_content.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
export function html_bar_content_padded(root) {
  let bc = html_bar_content(root);
  let content = property_get(bc, "content");
  html_page_padding_x(content);
  return bc;
}
