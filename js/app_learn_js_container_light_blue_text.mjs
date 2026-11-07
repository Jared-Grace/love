import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
export function app_learn_js_container_light_blue_text(root, text) {
  let c = app_learn_js_container_light_blue(root);
  html_div_text(c, text);
  return c;
}
