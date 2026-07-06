import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_container_dark(parent) {
  let container = html_div(parent);
  html_style_code_dark(container);
  return container;
}
