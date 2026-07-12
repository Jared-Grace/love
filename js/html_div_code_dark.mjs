import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_code_dark(parent) {
  let container = html_div(parent);
  html_style_code_dark(container);
  return container;
}
