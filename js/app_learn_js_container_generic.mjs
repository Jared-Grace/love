import { app_learn_js_container_generic_style } from "./app_learn_js_container_generic_style.mjs";
import { html_div } from "./html_div.mjs";
export function app_learn_js_container_generic(parent) {
  let container = html_div(parent);
  app_learn_js_container_generic_style(container);
  return container;
}
