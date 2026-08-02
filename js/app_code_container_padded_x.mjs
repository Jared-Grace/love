import { html_div } from "./html_div.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
export function app_code_container_padded_x(parent) {
  let c = html_div(parent);
  html_page_padding_x(c);
  return c;
}
