import { html_div_text } from "./html_div_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_container_light_blue_text(root, text) {
  let c = app_code_container_light_blue(root);
  let div = html_div_text(c, text);
  return c;
}
