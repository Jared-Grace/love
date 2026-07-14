import { html_div } from "./html_div.mjs";
import { app_code_padding_x } from "./app_code_padding_x.mjs";
export function app_code_container_padded_x(parent) {
  let c = html_div(parent);
  app_code_padding_x(c);
  return c;
}
